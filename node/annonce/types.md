
- Layout page
    - Views :
        - views/layout.pug
        - Buttons :
            - help => GET help
            - if not connected
                - register => GET register
                - sign_in => GET sign_in
            - if connected
                - my_profil => GET my_profil
        - Forms
            - search_input => GET search_result
    - JavaScript :
        - javascript/layout.js
        - help_onclick()
        - register_onclick()
        - sign_in_onclick()
        - my_profil_onclick()
        - search_input_submit()
    - CSS :
        - stylesheets/layout.css

- Home page
    - Views :
        - views/index.pug
    - Buttons :
        - post_ad => GET post_ad
        - ads => GET ads      
    - JavaScript :
        - javascript/index.js
        - post_ad_onclick()
        - ads_onclick()
    - CSS :
        - stylesheets/index.css
    
- Post Ad page : 
    - Views : 
        - views/post_ad.pug
        - Buttons :
            - submit_ad ==> GET submit_ad
            - cancel_ad ==> GET home
        - Javascript : 
            - javascript/post_ad.js
            - sumbit_ad_onclick()
            - cancel_ad_onclick()
        - CSS : 
            - stylesheets/post_ad.css
    
- Ads Page :
    - Views : 
    - Javascript : 
    - CSS : 
    
- help Page :
    - Views : 
    - Javascript : 
    - CSS : 
  
- register Page :
    - Views : 
    - Javascript : 
    - CSS : 
  
- Sign-in Page :
    - Views : 
    - Javascript : 
    - CSS : 
  
- My Profil Page :
    - Views : 
    - Javascript : 
    - CSS : 
  
