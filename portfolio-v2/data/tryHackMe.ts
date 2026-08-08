import type { TryHackMeAchievement, TryHackMeLab } from '@/types';

export const TRYHACKME_ACHIEVEMENTS: TryHackMeAchievement[] = [
  { id: 1, title: 'First Step into SOC', description: 'Explored emerging threats and SOC response.', rarity: 'Rare · 2.3%', category: 'SOC' },
  { id: 2, title: 'SOC Apprentice', description: 'Explored how a SOC team operates from inside.', rarity: 'Rare · 1.8%', category: 'SOC' },
  { id: 3, title: 'First Alert Closed', description: 'Closing your first alert.', rarity: 'Rare · 2.6%', category: 'SOC' },
  { id: 4, title: 'First Scenario Completed', description: 'Completing your first scenario.', rarity: 'Rare · 2.1%', category: 'SOC' },
  { id: 5, title: '3 Day Streak', description: 'Achieving a 3 day hacking streak.', rarity: 'Common · 11.3%', category: 'Learning' },
];

export const TRYHACKME_LABS: TryHackMeLab[] = [];
