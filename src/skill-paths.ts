import type { SkillPath } from "./types";

export const SKILL_PATHS: SkillPath[] = [
  {
    id: "neetcode-250",
    name: "NeetCode 250",
    icon: "NC",
    color: "#6366f1",
    description: "Master the complete 250 curated interview problems",
    problemIds: [
      1929, 217, 242, 1, 14, 49, 27, 169, 705, 706,
      912, 75, 347, 271, 304, 238, 36, 128, 122, 229,
      560, 41, 344, 125, 680, 1768, 88, 26, 167, 15,
      18, 189, 11, 881, 42, 219, 121, 3, 424, 567,
      209, 658, 76, 239, 682, 20, 225, 232, 155, 150,
      22, 735, 739, 901, 853, 71, 394, 895, 84, 704,
      35, 374, 69, 74, 875, 1011, 153, 33, 81, 981,
      410, 4, 1095, 206, 21, 141, 143, 19, 138, 2,
      287, 92, 622, 146, 460, 23, 25, 94, 144, 145,
      226, 104, 543, 110, 100, 572, 235, 701, 450, 102,
      199, 427, 1448, 98, 230, 105, 337, 1325, 124, 297,
      703, 1046, 973, 215, 621, 355, 1834, 767, 1405, 1094,
      295, 502, 1863, 78, 39, 40, 77, 46, 90, 47,
      79, 131, 17, 473, 698, 51, 52, 140, 208, 211,
      2707, 212, 463, 953, 997, 200, 695, 133, 286, 994,
      417, 130, 752, 207, 210, 261, 1462, 323, 684, 721,
      399, 310, 127, 1631, 743, 332, 1584, 778, 269, 787,
      1489, 2392, 2709, 70, 746, 1137, 198, 213, 5, 647,
      91, 322, 152, 139, 300, 416, 377, 279, 343, 1406,
      62, 63, 64, 1143, 1049, 309, 518, 494, 97, 877,
      1140, 329, 115, 72, 312, 10, 860, 53, 918, 978,
      55, 45, 1871, 134, 846, 649, 1899, 763, 678, 135,
      57, 56, 435, 252, 253, 2402, 1851, 168, 1071, 2807,
      867, 48, 54, 73, 202, 66, 13, 50, 43, 2013,
      136, 191, 338, 67, 190, 268, 371, 7, 201, 3133,
    ],
  },
  {
    id: "arrays",
    name: "Arrays & Hashing",
    icon: "AH",
    color: "#f59e0b",
    description: "Master hash maps, sets, and frequency arrays",
    problemIds: [
      1929, 217, 242, 1, 14, 49, 27, 169, 705, 706,
      912, 75, 347, 271, 304, 238, 36, 128, 122, 229,
      560, 41,
    ],
  },
  {
    id: "twoptr",
    name: "Two Pointers",
    icon: "2P",
    color: "#22c55e",
    description: "Solve with converging or fast/slow moving indices",
    problemIds: [283, 344, 125, 680, 1768, 88, 26, 167, 15, 18, 189, 11, 881, 42],
  },
  {
    id: "sliding",
    name: "Sliding Window",
    icon: "SW",
    color: "#06b6d4",
    description: "Subarray search with dynamic and fixed window techniques",
    problemIds: [219, 121, 3, 424, 567, 209, 658, 76, 239, 438],
  },
  {
    id: "stack",
    name: "Stack & Queue",
    icon: "SQ",
    color: "#a78bfa",
    description: "LIFO/FIFO data structures and monotonic stacks",
    problemIds: [
      682, 20, 225, 232, 155, 150, 22, 735, 739, 901,
      853, 71, 394, 895, 84, 32,
    ],
  },
  {
    id: "bsearch",
    name: "Binary Search",
    icon: "BS",
    color: "#fb7185",
    description: "Logarithmic search across sorted arrays and answer spaces",
    problemIds: [
      704, 35, 374, 69, 74, 875, 1011, 153, 33, 81,
      981, 410, 4, 1095, 34, 240,
    ],
  },
  {
    id: "linked",
    name: "Linked Lists",
    icon: "LL",
    color: "#34d399",
    description: "Pointer manipulation, reversals, and cycle detection",
    problemIds: [
      206, 21, 141, 142, 160, 234, 143, 19, 138, 2,
      287, 92, 622, 146, 460, 23, 25, 24, 148,
    ],
  },
  {
    id: "trees",
    name: "Trees & BST",
    icon: "TR",
    color: "#4ade80",
    description: "Binary trees, BST properties, DFS, and BFS level order",
    problemIds: [
      94, 144, 145, 226, 104, 543, 110, 100, 572, 235,
      701, 450, 102, 199, 427, 1448, 98, 230, 105, 337,
      1325, 124, 297, 108, 437, 236, 114,
    ],
  },
  {
    id: "heap",
    name: "Heap / Priority Queue",
    icon: "HP",
    color: "#ec4899",
    description: "Top-K elements, min/max-heaps, and streaming medians",
    problemIds: [703, 1046, 973, 215, 621, 355, 1834, 767, 1405, 1094, 295, 502],
  },
  {
    id: "backtrack",
    name: "Backtracking",
    icon: "BT",
    color: "#facc15",
    description: "Systematic state space tree exploration and pruning",
    problemIds: [
      1863, 78, 39, 40, 77, 46, 90, 47, 79, 131,
      17, 473, 698, 51, 52, 140,
    ],
  },
  {
    id: "tries",
    name: "Tries",
    icon: "TI",
    color: "#14b8a6",
    description: "Prefix tree implementations for dictionary and string search",
    problemIds: [208, 211, 2707, 212],
  },
  {
    id: "graphs",
    name: "Graphs & BFS/DFS",
    icon: "GR",
    color: "#f97316",
    description: "Adjacency lists, BFS/DFS traversal, islands, and cycles",
    problemIds: [
      463, 953, 997, 200, 695, 133, 286, 994, 417, 130,
      752, 207, 210, 261, 1462, 323, 684, 721, 399, 310,
      127,
    ],
  },
  {
    id: "adv-graphs",
    name: "Advanced Graphs",
    icon: "AG",
    color: "#ea580c",
    description: "Dijkstra, topological sort, MST, and Bellman-Ford",
    problemIds: [1631, 743, 332, 1584, 778, 269, 787, 1489, 2392, 2709],
  },
  {
    id: "dp",
    name: "1-D Dynamic Programming",
    icon: "1D",
    color: "#e879f9",
    description: "Fibonacci variants, coin change, robber, and linear memoization",
    problemIds: [
      70, 746, 1137, 198, 213, 5, 647, 91, 322, 152,
      139, 300, 416, 377, 279, 343, 1406,
    ],
  },
  {
    id: "dp-2d",
    name: "2-D Dynamic Programming",
    icon: "2D",
    color: "#d946ef",
    description: "Grid paths, LCS, edit distance, knapsack, and matrix DP",
    problemIds: [
      62, 63, 64, 1143, 1049, 309, 518, 494, 97, 877,
      1140, 329, 115, 72, 312, 10,
    ],
  },
  {
    id: "greedy",
    name: "Greedy Algorithms",
    icon: "GD",
    color: "#84cc16",
    description: "Locally optimal decision-making for global optima",
    problemIds: [860, 53, 918, 978, 55, 45, 1871, 134, 846, 649, 1899, 763, 678, 135],
  },
  {
    id: "intervals",
    name: "Intervals",
    icon: "IV",
    color: "#8b5cf6",
    description: "Interval insertion, overlapping range merging, and scheduling",
    problemIds: [57, 56, 435, 252, 253, 2402, 1851],
  },
  {
    id: "math-geom",
    name: "Math & Geometry",
    icon: "MG",
    color: "#38bdf8",
    description: "Matrix rotations, GCD, fast exponentiation, and number theory",
    problemIds: [168, 1071, 2807, 867, 48, 54, 73, 202, 66, 13, 50, 43, 2013],
  },
  {
    id: "bit-manip",
    name: "Bit Manipulation",
    icon: "BM",
    color: "#a855f7",
    description: "Bitwise shifts, XOR cancellation, masks, and binary counting",
    problemIds: [136, 191, 338, 67, 190, 268, 371, 7, 201, 3133],
  },
  {
    id: "sql-select",
    name: "SQL: Select & Filter",
    icon: "SL",
    color: "#0284c7",
    description: "PostgreSQL WHERE, DISTINCT, and NULL handling",
    problemIds: [595, 1757, 584, 1148],
  },
  {
    id: "sql-joins",
    name: "SQL: Joins & Aggregation",
    icon: "JN",
    color: "#818cf8",
    description: "PostgreSQL JOINs, GROUP BY, and HAVING",
    problemIds: [175, 183, 197, 182],
  },
  {
    id: "sql-50",
    name: "SQL 50",
    icon: "50",
    color: "#0ea5e9",
    description: "50 essential LeetCode SQL interview queries",
    problemIds: [
      5001, 5002, 5003, 5004, 5005, 5006, 5007, 5008, 5009, 5010,
      5011, 5012, 5013, 5014, 5015, 5016, 5017, 5018, 5019, 5020,
      5021, 5022, 5023, 5024, 5025, 5026, 5027, 5028, 5029, 5030,
      5031, 5032, 5033, 5034, 5035, 5036, 5037, 5038, 5039, 5040,
      5041, 5042, 5043, 5044, 5045, 5046, 5047, 5048, 5049, 5050,
    ],
  },
  {
    id: "pandas-basics",
    name: "Pandas: Basics",
    icon: "PD",
    color: "#2dd4bf",
    description: "Create, inspect, and select DataFrame data",
    problemIds: [2877, 2878, 2879, 2880],
  },
  {
    id: "pandas-clean",
    name: "Pandas: Clean & Reshape",
    icon: "PC",
    color: "#f472b6",
    description: "Drop duplicates, handle missing data, rename columns",
    problemIds: [2882, 2883, 2885, 2887],
  },
];

const XP_THRESHOLDS = [0, 100, 250, 500, 1000, 2000, 3500, 5000, 7500, 10000];

export function getLevel(xp: number): number {
  let level = 1;
  for (let i = 0; i < XP_THRESHOLDS.length; i++) {
    if (xp >= XP_THRESHOLDS[i]) level = i + 1;
    else break;
  }
  return Math.min(level, XP_THRESHOLDS.length);
}

export function getXPForNextLevel(level: number): number {
  return XP_THRESHOLDS[level] ?? XP_THRESHOLDS[XP_THRESHOLDS.length - 1];
}

export function getXPForCurrentLevel(level: number): number {
  return XP_THRESHOLDS[level - 1] ?? 0;
}
