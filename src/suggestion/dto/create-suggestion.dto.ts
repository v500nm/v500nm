export class CreateSuggestionDto {
    suggestion:Isuggestion[]
}
export interface Isuggestion{
    sugID:number;
    suggestions:string;
}
