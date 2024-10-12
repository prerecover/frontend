export interface IUsersStats {
    totalCreatedUsers: number;
    totalDeletedUsers: number;
    createdSurvey: number;
    completedSurvey: number;
}
export interface IAppointmentStats {
    totalAppointments: number;
    completedAppointments: number;
    acceptedAppointments: number;
    rejectedAppointments: number;
}
export interface IClinicStats {
    totalClinics: number;
    totalCreated: number;
    totalDeleted: number;
}
export interface ILinkStats {
    totalGenerated: number;
    totalUsed: number;
}

export interface IStatsMain {
    users: IUsersStats;
    appointments: IAppointmentStats;
    clinics: IClinicStats;
    links: ILinkStats;
}
