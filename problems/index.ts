import leetcodeProblems from "./leetcode_problems.json";
import sqlProblems from "./leetcode_sql_problems.json";
import type { Problem } from "../src/types";

export const BUNDLED_PROBLEMS: Problem[] = [
  ...(leetcodeProblems as Problem[]),
  ...(sqlProblems as Problem[]),
];

export { leetcodeProblems, sqlProblems };
export default BUNDLED_PROBLEMS;
