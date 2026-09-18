/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LeadInfo {
  name: string;
  instagram: string;
  phone: string;
  followers: string;
  source: string;
  coachingType: string;
}

export interface QuizAnswer {
  platform: string;
  audienceSize: string;
  mainStruggle: string;
  revenueGoal: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingState {
  date: string;
  time: string;
  confirmed: boolean;
}
