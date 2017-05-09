import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    data = [
        [
            'Test',
            'Test',
            'test'
        ],
        [
            'Test',
            'Test',
            'test'
        ],
        [
            'Test',
            'Test',
            'test'
        ]
    ];

    header = [
        'Test',
        'Test',
        'test'
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
