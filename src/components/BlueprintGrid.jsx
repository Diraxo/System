import { motion } from 'framer-motion'

// The signature element: a small circuit/system diagram — one hub, one
// trunk line, four branches to the industries Tusmo builds for. Deliberately
// NOT a symmetric hub-and-spoke: four spokes meeting at a center point reads
// as a big "X" at a glance (looks like "wrong", not "structure"). A trunk-
// and-branch layout (like a PCB trace or an org chart) can't form that shape,
// and it's kept in the right two-thirds of the frame so it never sits behind
// the headline text on the left.

const hub = { x: 56, y: 50 }
const trunkX = 74

const branchPositions = [
  { x: 92, y: 20 },
  { x: 92, y: 40 },
  { x: 92, y: 62 },
  { x: 92, y: 84 },
]

const minY = Math.min(...branchPositions.map((b) => b.y))
const maxY = Math.max(...branchPositions.map((b) => b.y))

const defaultLabels = ['HOTEL', 'HOSPITAL', 'SCHOOL', 'CAFÉ']

export default function BlueprintGrid({ labels = defaultLabels }) {
  const branches = branchPositions.map((pos, i) => ({ ...pos, label: labels[i] ?? defaultLabels[i] }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />

      {/* Node network: hidden on phones (text takes full width there),
          and masked so it fades toward the text column on larger screens. */}
      <div className="hidden sm:block absolute inset-0 [mask-image:linear-gradient(to_left,black_45%,transparent_80%)]">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          {/* dim base traces */}
          <motion.line
            x1={hub.x} y1={hub.y} x2={trunkX} y2={hub.y}
            stroke="#1C2230" strokeWidth="0.25"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
          />
          <motion.line
            x1={trunkX} y1={minY} x2={trunkX} y2={maxY}
            stroke="#1C2230" strokeWidth="0.25"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75, ease: 'easeInOut' }}
          />
          {branches.map((b, i) => (
            <motion.line
              key={`base-${b.label}`}
              x1={trunkX} y1={b.y} x2={b.x} y2={b.y}
              stroke="#1C2230" strokeWidth="0.25"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.3 + i * 0.12, ease: 'easeInOut' }}
            />
          ))}

          {/* teal glow overlay, same paths */}
          <motion.line
            x1={hub.x} y1={hub.y} x2={trunkX} y2={hub.y}
            stroke="#00E5C7" strokeWidth="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
          />
          <motion.line
            x1={trunkX} y1={minY} x2={trunkX} y2={maxY}
            stroke="#00E5C7" strokeWidth="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{ duration: 0.6, delay: 0.75, ease: 'easeInOut' }}
          />
          {branches.map((b, i) => (
            <motion.line
              key={`glow-${b.label}`}
              x1={trunkX} y1={b.y} x2={b.x} y2={b.y}
              stroke="#00E5C7" strokeWidth="0.15"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.55 }}
              transition={{ duration: 0.4, delay: 1.3 + i * 0.12, ease: 'easeInOut' }}
            />
          ))}
        </svg>

        {/* hub — unlabeled, just the source node */}
        <motion.span
          className="absolute block w-3 h-3 rounded-full bg-teal shadow-[0_0_18px_4px_rgba(0,229,199,0.55)]"
          style={{ left: `${hub.x}%`, top: `${hub.y}%`, transform: 'translate(-50%, -50%)' }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />

        {/* branch endpoints — labeled */}
        {branches.map((b, i) => (
          <motion.div
            key={b.label}
            className="absolute flex items-center gap-2"
            style={{ left: `${b.x}%`, top: `${b.y}%`, transform: 'translate(-100%, -50%)' }}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.5 + i * 0.12 }}
          >
            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-muted whitespace-nowrap">
              {b.label}
            </span>
            <span className="block w-1.5 h-1.5 rounded-full bg-violet shadow-[0_0_10px_2px_rgba(124,92,255,0.5)] shrink-0" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
