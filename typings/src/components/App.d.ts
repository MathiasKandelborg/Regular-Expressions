/// <reference types="react" />
import * as React from 'react';
import { Props } from '../../types/global';
/** Basic set of props to be used in the app
 * @typedef defaultProps
 * @param {string} title The title of the app
 * @param {React.Fragment} children A React fragment
 */
export declare const defaultProps: {
    title: string;
    children: JSX.Element;
};
/**
 *
 * The root application component
 *
 * This component wraps code used on the client
 *
 * **Always pass global props to this component, *nothing else***
 * @param {defaultProps} props  The props
 * @param {Array} State The state (usually not used here)
 */
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
