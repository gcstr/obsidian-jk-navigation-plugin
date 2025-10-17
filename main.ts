import { Plugin } from 'obsidian';

export default class JKNavigationPlugin extends Plugin {
    async onload() {
        console.log('Loading JK Navigation Plugin');

        // Register a keydown event handler on the document
        this.registerDomEvent(document, 'keydown', (evt: KeyboardEvent) => {
            // Check if Ctrl+J or Ctrl+K is pressed
            if (evt.ctrlKey && (evt.key === 'j' || evt.key === 'k')) {
                // Look for suggestion containers using multiple selectors
                const suggestionContainer = document.querySelector('.prompt, .suggestion-container, .modal.mod-command-palette');

                if (suggestionContainer && this.isVisible(suggestionContainer)) {
                    // Prevent default Ctrl+J/K behavior
                    evt.preventDefault();
                    evt.stopPropagation();

                    // Create and dispatch an arrow key event instead
                    const arrowKey = evt.key === 'j' ? 'ArrowDown' : 'ArrowUp';
                    const arrowEvent = new KeyboardEvent('keydown', {
                        key: arrowKey,
                        code: arrowKey === 'ArrowDown' ? 'ArrowDown' : 'ArrowUp',
                        keyCode: arrowKey === 'ArrowDown' ? 40 : 38,
                        bubbles: true,
                        cancelable: true,
                        view: window
                    });

                    // Find the input element in the suggestion container and dispatch to it
                    const input = suggestionContainer.querySelector('input');
                    if (input) {
                        input.dispatchEvent(arrowEvent);
                    } else {
                        // Fallback to active element or container
                        const target = document.activeElement || suggestionContainer;
                        target.dispatchEvent(arrowEvent);
                    }
                }
            }
        });
    }

    // Helper function to check if an element is visible
    isVisible(element: Element): boolean {
        const htmlElement = element as HTMLElement;
        return !!(htmlElement.offsetWidth || htmlElement.offsetHeight || htmlElement.getClientRects().length);
    }

    onunload() {
        console.log('Unloading JK Navigation Plugin');
    }
}
