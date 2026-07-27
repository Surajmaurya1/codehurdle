"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Grid, 
  Binary, 
  GitBranch, 
  Workflow, 
  Box, 
  Cpu, 
  Layers, 
  HelpCircle, 
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TOPICS = [
  {
    id: "arrays",
    name: "Arrays & Matrices",
    icon: Grid,
    count: "65+ Problems",
    difficulty: "Easy to Hard",
    description: "Contiguous memory structures, prefix sums, 2D matrix rotations, and element swapping techniques.",
    popular: ["Two Sum", "3Sum", "Container With Most Water"],
    height: "min-h-[220px]",
    badge: "Essential",
  },
  {
    id: "dp",
    name: "Dynamic Programming",
    icon: Cpu,
    count: "80+ Problems",
    difficulty: "Medium to Hard",
    description: "State transition formulas, memoization tables, 1D/2D DP, subset knapsack, and sequence matching.",
    popular: ["Climbing Stairs", "Coin Change", "LIS", "Edit Distance"],
    height: "min-h-[260px]",
    badge: "Most Tested",
  },
  {
    id: "trees",
    name: "Trees & Tries",
    icon: Workflow,
    count: "75+ Problems",
    difficulty: "Medium to Hard",
    description: "Binary Search Trees, DFS/BFS traversals, lowest common ancestor, prefix trees, and segment trees.",
    popular: ["Binary Tree Max Path", "Serialize BT", "Implement Trie"],
    height: "min-h-[240px]",
    badge: "High Frequency",
  },
  {
    id: "strings",
    name: "Strings & Parsing",
    icon: Binary,
    count: "50+ Problems",
    difficulty: "Easy to Medium",
    description: "String manipulation, anagram detection, pattern matching (KMP, Rabin-Karp), and palindromes.",
    popular: ["Longest Palindromic Substring", "Valid Anagram", "Group Anagrams"],
    height: "min-h-[220px]",
    badge: "Essential",
  },
  {
    id: "graphs",
    name: "Graphs & Networks",
    icon: Box,
    count: "60+ Problems",
    difficulty: "Medium to Hard",
    description: "Dijkstra's algorithm, topological sort, union-find (DSU), minimum spanning trees, and cycle detection.",
    popular: ["Course Schedule", "Number of Islands", "Alien Dictionary"],
    height: "min-h-[260px]",
    badge: "High Frequency",
  },
  {
    id: "linked-lists",
    name: "Linked Lists",
    icon: GitBranch,
    count: "35+ Problems",
    difficulty: "Easy to Medium",
    description: "Pointers, node mutations, cycle detection, reordering, and merging sorted structures.",
    popular: ["Reverse List", "Merge K Lists", "LRU Cache"],
    height: "min-h-[220px]",
    badge: "Core",
  },
];

export function LearningTopics() {
  return (
    <section id="topics" className="py-28 relative overflow-hidden border-t border-border/40 bg-surface/20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Learn Everything in One Place.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
            Every core data structure, algorithm category, and system design concept organized in one responsive hub.
          </p>
        </div>

        {/* Feature Grid with Varying Heights & Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {TOPICS.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <div
                  className={`p-6 rounded-2xl border border-border bg-background hover:border-[#7B2DFF]/40 hover:scale-[1.01] transition-all duration-200 group flex flex-col justify-between ${topic.height}`}
                >
                  <div className="space-y-3.5">
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-[#7B2DFF] group-hover:border-[#7B2DFF]/30 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <Badge variant="purple" className="text-[10px]">
                        {topic.badge}
                      </Badge>
                    </div>

                    {/* Title & Count */}
                    <div>
                      <h3 className="text-base font-bold text-foreground group-hover:text-[#7B2DFF] transition-colors">
                        {topic.name}
                      </h3>
                      <span className="text-xs font-mono text-foreground-muted">{topic.count} • {topic.difficulty}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-foreground-muted leading-relaxed">
                      {topic.description}
                    </p>

                    {/* Question Pills */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {topic.popular.map((q, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-surface border border-border/60 font-mono text-foreground-muted">
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs font-medium text-foreground group-hover:text-[#7B2DFF] transition-colors">
                    <span>Explore Track</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
