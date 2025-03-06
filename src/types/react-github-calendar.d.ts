declare module 'react-github-calendar' {
  export interface ContributionDay {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }

  export interface BlockElement {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
    color: string;
  }

  export interface Theme {
    level0: string;
    level1: string;
    level2: string;
    level3: string;
    level4: string;
  }

  export interface CalendarProps {
    username: string;
    blockSize?: number;
    blockMargin?: number;
    color?: string;
    fontSize?: number;
    theme?: Theme;
    style?: React.CSSProperties;
    transformData?: (data: ContributionDay[]) => ContributionDay[];
    renderBlock?: (block: BlockElement, activity: boolean) => React.ReactNode;
    tooltipRenderer?: (day: ContributionDay) => React.ReactNode;
  }

  const GitHubCalendar: React.FC<CalendarProps>;
  export default GitHubCalendar;
}