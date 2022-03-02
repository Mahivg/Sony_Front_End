import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'reversestring'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: any, param1: string, param2: string) {

    console.log(value);
    const valArray = value.split("");
    const revArray = valArray.reverse();
    const reversedString = revArray.join('').toString();
    return reversedString;
  }

}
