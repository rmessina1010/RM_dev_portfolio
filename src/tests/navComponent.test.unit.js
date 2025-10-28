import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from 'chai';
import MainNav from '../components/mainNavComponent';
import {testPages, testSiteName } from './testData';
import { BrowserRouter } from 'react-router-dom';
const currentURL ='/home';

describe('Main Navigation', () => {

    const { container } = render (
        <BrowserRouter><MainNav url={currentURL} children={testPages} siteName={testSiteName} /></BrowserRouter>
);
    const heading = screen.getByText(testSiteName);
    const lastNavItemIndex = testPages.length - 1;
    const contactLink = (lastNavItemIndex > -1) ? screen.getByText(testPages[lastNavItemIndex].text) : null;
    const links = container.querySelector('ul.navbar-nav');
    const currentLink = screen.getByText('Test 1');

    it('has heading that links back to home page', () => {
        expect(heading).to.exist;
        expect(heading.tagName).to.equal('A');
        expect(heading.getAttribute('href')).to.equal('/');
    });
    it('displays the same number of links as passed', () => {
        expect(links.children.length).to.equal(testPages.length);
    });
    if (contactLink){
        it(`has a ${testPages[lastNavItemIndex].text} link`, () => {
            expect(contactLink).to.exist;
            expect(contactLink.tagName).to.equal('A');
            expect(contactLink.getAttribute('href')).to.equal(testPages[lastNavItemIndex].url);
        });
    }
    it('highlights the matching url link', () => {
        expect(currentLink).to.exist;
        expect(currentLink.classList.contains('active')).to.be.true;
    });
});
