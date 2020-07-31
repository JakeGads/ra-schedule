import WeekDay from "./weekDay";
import WeekEnd from "./weekEnd";

export default class ResidentAdvisor{
    private name: string;
    
    private preferredWeekDay: WeekDay = WeekDay.None;
    private preferredWeekEnd: WeekEnd = WeekEnd.None; 

    private banWeekDay: WeekDay = WeekDay.None;

    constructor (name:string) {
        this.name = name;
    }

    public setPreferredWeekDay(preferredWeekDay: WeekDay): void {
        this.preferredWeekDay = preferredWeekDay;
        if(WeekDay.Switch === preferredWeekDay){
            this.banWeekDay = WeekDay.None;
        }
    }

    public setPreferredWeekEnd(preferredWeekEnd: WeekEnd): void {
        this.preferredWeekEnd = preferredWeekEnd;
    }

    public setBanWeekDay(banWeekDay: WeekDay): void {
        this.banWeekDay = banWeekDay;
    }

    public getPreferredWeekDay(): WeekDay{
        return this.preferredWeekDay;
    }

    public getPreferredWeekEnd(): WeekEnd{
        return this.preferredWeekEnd;
    }

    public getBanWeekDay(): WeekDay {
        return this.banWeekDay;
    }

    public setName(name:string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

}