/// <reference types="react" />
import * as React from 'react';
import { Props } from '../../types/global';
export declare const defaultProps: {
    title: string;
    children: JSX.Element;
};
export declare class App extends React.Component<Props, {}> {
    static defaultProps: {
        testProps: {
            title: string;
            children: JSX.Element;
        };
    };
    static propTypes: {
        testProps: any;
    };
    constructor(props: Props);
    render(): JSX.Element;
}
