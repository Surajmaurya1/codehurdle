"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Grid, 
  Layers, 
  GitBranch, 
  Workflow, 
  Cpu, 
  Binary, 
  Box, 
  HelpCircle, 
  ArrowRight,
  Sparkles,
  BookOpen
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TOPICS = [
  {
    id: "arrays",
    name: "Arrays & Matrices",
    icon: Grid,
    count: "65+ Problems",
    difficulty: "Easy to Hard",
    description: "Contiguous memory structures, prefix sums, 2D matrix rotations, and element swapping techniques.",
    popular: ["Two Sum", "3Sum", "Container With Most Water", "Rotate Image", "Subarray Sum Equals K"],
    badge: "Essential",
  },
  {
    id: "strings",
    name: "Strings & Parsing",
    icon: Binary,
    count: "50+ Problems",
    difficulty: "Easy to Medium",
    description: "String manipulation, anagram detection, pattern matching (KMP, Rabin-Karp), and palindromes.",
    popular: ["Longest Palindromic Substring", "Valid Anagram", "Group Anagrams", "String to Integer (atoi)"],
    badge: "Essential",
  },
  {
    id: "linked-lists",
    name: "Linked Lists",
    icon: GitBranch,
    count: "35+ Problems",
    difficulty: "Easy to Medium",
    description: "Pointers, node mutations, cycle detection, reordering, and merging sorted structures.",
    popular: ["Reverse Linked List", "Merge K Sorted Lists", "Linked List Cycle II", "LRU Cache"],
    badge: "Core",
  },
  {
    id: "trees",
    name: "Trees & Tries",
    icon: Workflow,
    count: "75+ Problems",
    difficulty: "Medium to Hard",
    description: "Binary Search Trees, DFS/BFS traversals, lowest common ancestor, prefix trees, and segment trees.",
    popular: ["Binary Tree Maximum Path Sum", "Serialize & Deserialize BT", "Implement Trie", "Lowest Common Ancestor"],
    badge: "High Frequency",
  },
  {
    id: "graphs",
    name: "Graphs & Networks",
    icon: Box,
    count: "60+ Problems",
    difficulty: "Medium to Hard",
    description: "Dijkstra's algorithm, topological sort, union-find (DSU), minimum spanning trees, and cycle detection.",
    popular: ["Course Schedule I & II", "Number of Islands", "Alien Dictionary", "Cheapest Flights Within K Stops"],
    badge: "High Frequency",
  },
  {
    id: "dp",
    name: "Dynamic Programming",
    icon: Cpu,
    count: "80+ Problems",
    difficulty: "Medium to Hard",
    description: "State transition formulas, memoization tables, 1D/2D DP, subset knapsack, and sequence matching.",
    popular: ["Climbing Stairs", "Coin Change", "Longest Increasing Subsequence", "Edit Distance", "Word Break"],
    badge: "Most Tested",
  },
  {
    id: "greedy",
    name: "Greedy Algorithms",
    icon: Layers,
    count: "40+ Problems",
    difficulty: "Medium",
    description: "Local optimal choices, activity selection, interval overlapping, and heap-based greedy strategies.",
    popular: ["Jump Game I & II", "Non-overlapping Intervals", "Gas Station", "Task Scheduler"],
    badge: "Core",
  },
  {
    id: "sysdesign",
    name: "System Design Basics",
    icon: Cpu,
    count: "25+ Modules",
    difficulty: "Medium to Hard",
    description: "Scalability patterns, load balancing, database sharding, caching strategies, rate limiters, and message queues.",
    popular: ["Design Rate Limiter", "Design URL Shortener", "Design Distributed Cache", "Consistent Hashing"],
    badge: "System Design",
  },
  {
    id: "questions",
    name: "Top Interview Questions",
    icon: HelpCircle,
    count: "150+ Curated",
    difficulty: "All Levels",
    description: "Hand-picked, high-yield questions repeatedly asked in phone screens and onsites at FAANG/Tier-1 tech.",
    popular: ["Blind 75 Curated", "NeetCode 150 Tagged", "Top 100 Liked Questions", "Company Specific Tags"],
    badge: "Curated",
  },
];

export function LearningTopics() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="topics" className="py-24 relative overflow-hidden border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="purple" className="px-3 py-1 text-xs">
            COMPLETE CURRICULUM
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Learn Everything in One Place.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
            Every core data structure, algorithm category, and system design concept organized in one comprehensive hub.
          </p>
        </div>

        {/* Grid of Learning Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <Card className="p-6 h-full flex flex-col justify-between hover:border-[#7B2DFF]/40 transition-all duration-300 group">
                  <div className="space-y-4">
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-lg bg-surface-hover border border-border flex items-center justify-center text-[#7B2DFF] group-hover:bg-[#7B2DFF]/10 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <Badge variant="purple" className="text-[10px]">
                        {topic.badge}
                      </Badge>
                    </div>

                    {/* Title & Count */}
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-[#7B2DFF] transition-colors flex items-center gap-1.5">
                        <span>{topic.name}</span>
                      </h3>
                      <span className="text-xs font-mono text-foreground-muted">{topic.count} • {topic.difficulty}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-foreground-muted leading-relaxed">
                      {topic.description}
                    </p>

                    {/* Popular questions tags */}
                    <div className="pt-2">
                      <span className="text-[10px] font-mono text-foreground-muted uppercase block mb-1.5">
                        Top Questions:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {topic.popular.slice(0, 3).map((q, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-surface-hover border border-border/50 text-foreground-muted font-mono">
                            {q}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom link */}
                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-foreground group-hover:text-[#7B2DFF] font-medium transition-colors">
                    <span>Explore Track</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
