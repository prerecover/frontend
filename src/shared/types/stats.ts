export interface IUsersStats {
    totalCreatedUsers: number;
    totalDeletedUsers: number;
    completedSurvey: number;
    totalUsers: number;
}
export interface IAppointmentStats {
    totalAppointments: number;
    completedAppointments: number;
    acceptedAppointments: number;
    rejectedAppointments: number;
}

export interface IAdminStats {
    inProcessAppointments: number;
    approovedAppointments: number;
    pendingAppointments: number;
    inProcessSurveys: number;
}

export interface IClinicStats {
    totalClinics: number;
    totalCreated: number;
    totalDeleted: number;
}

export interface IStatsMain {
    users: IUsersStats;
    appointments: IAppointmentStats;
    clinics: IClinicStats;
}
