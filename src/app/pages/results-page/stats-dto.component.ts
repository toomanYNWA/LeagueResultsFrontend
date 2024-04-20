export interface StatsDTO {
  id: number;
  shotsHost: number;
  onTargetHost: number;
  shotsGuest: number;
  onTargetGuest: number;
  possessionHost: number;
  possessionGuest: number;
  hostMinutes: number[];
  guestMinutes: number[];
  matchId: number;
}
