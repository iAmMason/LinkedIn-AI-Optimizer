# Changelog

## 2024-06-12

- **Repo name and icons updated**
  - Linkedin-AI-Enhancer --> aiBlock-for-LinkedIn
  - Original pizza icons --> custom aiBlock icons
  - About updated to reflect LinkedIn Article title
    

## 2024-06-11

- **Extension updated**
  - Finds nested ul elements without first letter specificity  
    ```javascript
    document.querySelectorAll('.display-flex.align-items-center ul');
    ```

- **Extension broke**
  - Linkedin changed ul elements to begin with the letter 'O'

## 2024-06-07

- **Finds nested ul elements beginning with the letter 'u'**
  - This is a recurring pattern that effectively blocks all AI prompts  
    ```javascript
    document.querySelectorAll('.display-flex.align-items-center ul[class^="u"]');
    ```
    
