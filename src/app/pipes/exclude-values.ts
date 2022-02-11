import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'excludeValue'
})
export class ExcludeValuePipe implements PipeTransform {

    transform(value: any, args?: any): any {

    return value.filter(function (course:any) {
       console.log(args)
        return course.name != args; 
    });
    }
}