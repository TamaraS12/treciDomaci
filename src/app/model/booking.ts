export interface Booking {
    id: number;
    numberOfPersons: number;
    dateFrom: Date;
    dateTo: Date;
    price: number;

    userId: number;
    accommodationId: number;
}