import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ConsistencyDashboard = () => {
  const [githubStats, setGithubStats] = useState({ contributions: 0, yearsActive: 0 })
  const [leetcodeStats, setLeetcodeStats] = useState({ solved: 0, yearsActive: 1 })
  const [loading, setLoading] = useState(true)

  const githubUsername = 'YashChindhe'
  const leetcodeUsername = 'SY3NO7u023'

  useEffect(() => {
    const fetchStats = async () => {
      console.log('Fetching live stats from APIs...');
      setLoading(true)
      try {
        // Fetch LeetCode stats - Using a Vercel-hosted mirror with a Render backup
        let leetData = null;
        try {
          const leetResponse = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${leetcodeUsername}`)
          if (leetResponse.ok) {
            leetData = await leetResponse.json()
          } else {
            // Backup API if Faisalshohag is rate-limited or down
            const backupResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeUsername}/solved`)
            if (backupResponse.ok) leetData = await backupResponse.json()
          }
        } catch (e) { console.error('LeetCode main fetch failed, checking backup...'); }

        if (leetData) {
          console.log('LeetCode Data Received:', leetData);
          
          let daysActive = 0
          // Handle both string and object formats for calendar
          const rawCalendar = leetData.submissionCalendar || leetData.submissionCalendar
          if (rawCalendar) {
            try {
              const calendar = typeof rawCalendar === 'string' ? JSON.parse(rawCalendar) : rawCalendar
              daysActive = Object.keys(calendar).length
            } catch (e) { console.error('Error parsing LeetCode calendar:', e) }
          }

          setLeetcodeStats(prev => ({
            ...prev,
            solved: leetData.totalSolved || leetData.solvedProblem || prev.solved,
            yearsActive: 1 // Completed years (2025)
          }))
        }

        // Fetch GitHub stats - Using a more reliable Vercel proxy
        const ghResponse = await fetch(`https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=all`)
        if (ghResponse.ok) {
          const ghData = await ghResponse.json()
          console.log('GitHub Data Received:', ghData);
          
          if (ghData && ghData.total) {
            const totalContributions = Object.entries(ghData.total || {})
               .filter(([year, val]) => parseInt(year) >= 2025 && typeof val === 'number')
               .reduce((sum, [_, val]) => sum + val, 0)
            
            const activeYears = Object.entries(ghData.total || {})
               .filter(([year, count]) => parseInt(year) >= 2025 && count > 0)
               .map(([year]) => year)
            
            const totalYears = activeYears.length 
            const yearsActiveValue = totalYears > 1 ? totalYears - 1 : 1 

            setGithubStats(prev => ({
              contributions: totalContributions || prev.contributions,
              yearsActive: yearsActiveValue || prev.yearsActive
            }))
          }
        }
      } catch (error) {
        console.error('Error fetching live stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [leetcodeUsername, githubUsername])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="consistency" style={{ marginTop: 'clamp(80px, 15vh, 200px)', marginBottom: 'clamp(80px, 15vh, 200px)' }}>
      {/* Section Header */}
      <div
        className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
      >
        <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>development & problem solving.</span>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* GitHub Card */}
        <motion.a
           href={`https://github.com/${githubUsername}`}
           target="_blank"
           rel="noopener noreferrer"
           variants={cardVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-2xl p-8 flex flex-col justify-between group hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-all duration-500 cursor-pointer"
        >
          <div>
            <div className="flex justify-between items-start mb-6">
               <h3 className="text-black/40 dark:text-white/40 uppercase font-black tracking-widest text-xs md:text-sm">GitHub</h3>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-black text-black dark:text-white">
                {loading ? '...' : `${githubStats.contributions}+`}
              </p>
              <p className="text-black/50 dark:text-white/50 font-semibold uppercase tracking-tight text-sm">Total Contributions</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5">
            <p className="text-black/30 dark:text-white/30 text-sm font-bold uppercase tracking-widest">
              Years Active : <span className="text-black dark:text-white">{githubStats.yearsActive}+</span>
            </p>
          </div>
        </motion.a>

        {/* LeetCode Card */}
        <motion.a
           href={`https://leetcode.com/u/${leetcodeUsername}`}
           target="_blank"
           rel="noopener noreferrer"
           variants={cardVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-2xl p-8 flex flex-col justify-between group hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-all duration-500 cursor-pointer"
        >
          <div>
            <div className="flex justify-between items-start mb-6">
               <h3 className="text-black/40 dark:text-white/40 uppercase font-black tracking-widest text-xs md:text-sm">LeetCode</h3>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-black text-black dark:text-white">
                {loading ? '...' : `${leetcodeStats.solved}+`}
              </p>
              <p className="text-black/50 dark:text-white/50 font-semibold uppercase tracking-tight text-sm">Problems Solved</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5">
            <p className="text-black/30 dark:text-white/30 text-sm font-bold uppercase tracking-widest">
              Years Active : <span className="text-black dark:text-white">{leetcodeStats.yearsActive}+</span>
            </p>
          </div>
        </motion.a>
      </div>
    </section>
  )
}

export default ConsistencyDashboard
