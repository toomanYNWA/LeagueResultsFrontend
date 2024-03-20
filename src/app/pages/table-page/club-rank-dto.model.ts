export interface ClubRankDTO {
  id: number;
  points: number;
  won: number;
  lost: number;
  drawn: number;
  leagueId: number;
  goalDifference: number;
  matchesPlayed: number;
  clubName: string;
  [key: string]: string | number;
}
