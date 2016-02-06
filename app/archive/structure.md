# Structure of the Database

### User                (id)
- Book
    - id               (int)
    - name             (string)
    - genre            (array)
    - is_series        (boolean)
    - version          (string)
    
    - Book.Character
        - gender       (array)
        - first_name   (string)
        - middle_name  (string)
        - last_name    (string)
        - birthday
            - year      (int)
            - month     (int)
            - day       (int)      
        - .origin
            - city      (string)
            - country   (string)
        - .body
            - ethnicity
            - body_type
            - face
                - hair_type
                - hair_color
                - ...            
    - Book.Journey
        - id
        - name
        - cast
        - protagonist   (array)
        - milestone
            - date
            - name
            - event
            - cast
            - location
            - origin
            - destination
     
    - Book.Timeline
        - id
        - 
    