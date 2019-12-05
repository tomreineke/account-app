import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'transformAmount'})
export class TransformAmount implements PipeTransform {
    transform(value: string): string {
        return value.replace(/ EUR/g, '')
            .replace(/\./g, '')
            .replace(/,/g, '.')
            .replace(/\+ /g, '')
            .replace(/- /g, '-');
    }
}
