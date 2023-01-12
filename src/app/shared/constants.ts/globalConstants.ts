export class Constants {
  public static displayedColumns = [
    'firstName',
    'email',
    'phone',
    'stay',
    'room',
    'addressStreet',
    'addressLocation',
  ];
  public static roomSuits: string[] = ['presidential-suite', 'business-suite'];
  public static paymentOptions: string[] = ['Credit Card', 'Paypal', 'Cash', 'Bitcoin'];

  public static repairStatus: Array<string> = [
    'Searching Roadside',
    'Under Repair(HTT)',
    'Under Repair(Vendor`s)',
    'Parts Awaited',
  ].sort();
  public static repairAlerts: string[] = [
    'Inspection Due',
    'Oil Change Due',
  ].sort();
  // rate history filters
  public static durationOptions: string[] = [
    'All',
    'Last one month',
    'Last two months',
    'Last six months',
    'Last one year',
    'Last two years',
    'Last Three years',
  ];
}
