/// <reference types="react" />
import * as React from 'react';
/**
 * @name props
 * @typedef props
 * @param {string} title The title
 * @param React.node The React children nodes
 */
/** @type {props} */
export interface props {
    title: string;
    children: React.ReactFragment;
}
/**
 * The properties passed to the root app component.
 * @see {module:foo.props}
 */
export interface Props {
    testProps: props;
}
