# To access the authentication service

    - method - post
    - admin register
        - url - http://localhost:8080/api/auth/admin/register
                    - example data
                    {
                    "firstName":"Kidus",
                    "lastName":"Sintayehu",
                    "username":"Saint",
                    "email":"kidussintayehu60@gmail.com",
                    "password":"kidussintayehu60@gmail.com",
                    "phoneNumber":"0909740768"
                    }
    - login
        - url  - http://localhost:8080/api/auth/login
                - example data
                        {
                        "username":"Saint",
                        "password":"kidussintayehu60@gmail.com"
                        }
    - normal user register
        - url - http://localhost:8080/api/auth/user/register
        - headers
        token - add admin token here like eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmQ2Nzg4NDlmODZmYzI1YzU3NmIwMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzM1NzYzNCwiZXhwIjoxNjczNjE2ODM0fQ.f_JTjQSND1Qh6mrgodmYA-tLcW-pInn4pWfyVFz7dHo
        - example data
                {
                "firstName":"Ysihak",
                "lastName":"Bazezew",
                "username":"YsihakBazezew",
                "email":"YsihakBazezew@gmail.com",
                "password":"YsihakBazezew@gmail.com",
                "phoneNumber":"0916856479"
                }
