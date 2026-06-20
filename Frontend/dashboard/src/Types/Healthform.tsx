export interface HealthAssessmentForm {
  id: number;
  userId: number;

  residentName: string;
  date: string;
  caregiverName: string;
  age: number;
  gender: string;
  roomNo: string;

  vitals: {
    temperature: string;
    bloodPressure: string;
    heartRate: string;
    oxygenLevel: string;
    respiratoryRate: string;
  };

  symptoms: {
    fever: boolean;
    cough: boolean;
    fatigue: boolean;
    headache: boolean;
    shortnessOfBreath: boolean;
    dizziness: boolean;
  };

  notes: string;
  caregiverSignature: string;

  activity: {
    morning: ActivityBlock;
    afternoon: ActivityBlock;
    evening: ActivityBlock;
  };

  meals: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    snacks: boolean;
  };
}

interface ActivityBlock {
  walk: boolean;
  exercise: boolean;
  therapy: boolean;
  socialInteraction: boolean;
}