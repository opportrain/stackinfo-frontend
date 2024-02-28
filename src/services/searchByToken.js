const baseURL = "GET   https://search-stacks-nhtjl6xzla-zf.a.run.app/searchByToken/TokenHere"

//for test take some responses
export default[
    {
        "city": null,
        "company_name": "ProGineer Technologies",
        "industries": null,
        "other_details": null,
        "stacks": {
            "available_stacks": [
                "dba",
                "devops",
                "backend"
            ],
            "backend": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Backend/spring-3.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=fjxpeD5yVZa1jiO7TAy4ltUELq5lP7QcLNRbX3tI6HFLnDTDdaootDP811xgfPU5df9dM6r6cGAW1OeCLCQ0YNp9wZig%2FUtRUe16CLPX07%2FanQHjEyPn45VMhBORCLbbc%2FDJlIMrt1%2BMTmrgyerH4OAnOfcBA9E8zjlwtTqMmuG0cs1kNShswICQd6AA%2FFfkyo7vjSejeEGiYMBMB%2F37KeBouakXOSSiNn%2BFUY1s5DAQ0EX9yeXKxSaoPYMTLsV0qobbv0MaUx1eaS0G8vSgoMXxRREttEHscwQOobmRwD7vBrVhDlXsk0Vq9%2BmI2OMd5hId7xcPYsHM2hSWNp3aYg%3D%3D",
                    "name": "Spring Boot"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Backend/dotnet-vertical.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=nnLzD5RcVKfECUD%2BL5v65%2BWvHpc1P4PPtzwcXaYAamXP%2B1i6j%2BDc4tlPeFToCI6umXr28RFDPz5mAOFXg8R8L94k5rFsNfodkjKXhkmM26Lwrd4E7pUTdMbvR9Hlof5KTf6qzgStjI%2Bbvsc7VEhz9Mn2PVZNn6A13WUYHqYscIj7paUJyyoyyS11ODiYppzQeY202AfkxqqN%2BTCUm6XSjMDHhJdliZAutOwXYQXv%2Fpf2KOWE2kqJR1I9wwJbo4%2BdRametrUJqhhXYl3kqcEt7DagFftzMHOpoFtAw0FalX2A06uRUmEpkdNOcCQowcLTjBs1FHh%2FRIw0ftl5YIWJaQ%3D%3D",
                    "name": "ASP.NET Core"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Backend/cpp3-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=kmN8qmriHoeM%2FI%2FqYyCKTj%2F0h%2FzV5EgR4a8WoNwWjr6wb5kvkYqfAQWA12Ax4TINncbGo5JMKVS9a3%2FxU%2BDW0F8xfm7ykU03t1w4pcDnWzEhTtzF3La%2B58kqK9MdZIc7k0Qp33%2B9Q0yOan0lsU7xbE0yNdXvF81%2FQ2W6LiDvPaJQTWubG9WhNaj7tYgt5AWyoQl%2FaYTOTf3m5%2BzMeNAq5KW5bgxZfXBWMMBeTaZuhA9plBrdDWeAITG0cpgXFLAwZEAM9S2%2BPlUH%2B8jokjK9aFY1Plz%2Bb39%2FB%2F6M%2BwACaIrHQuAscn3SI4hX5xNi2MyNYfDf1xOQT9u8b6ePBq5%2F5g%3D%3D",
                    "name": "C++"
                }
            ],
            "dba": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/DBA/oracle-6.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=WfuWdutnWzh5paL%2BwoRNd5Qxb71HQD%2BMNU0v%2FNAhBdq7DZBXRXEOvEGYTrx4YwHT4F6BFSFz9jK%2FR1F6UnT2Iv44qWg2Dsh6m7w6w6z4iE%2ByqsfCOyq7%2FsGdpGMlr65CukwfxofrHB2KdXGG1%2BvAimxhLPHyp3BIM4sj0Khy8ISE4mbysSDzmj3nHBuu7%2BSoIdE4ugraEVuOKeKFRB8O008NWjT90HMj953xL5C20ZwBBrUwYnR2HeIkzQaMZHQ%2BY%2Bx8hcQFSTunGrZt0UaPArRe%2BH6DDMfQwrCgNIYwcZVE4iFIKS3rtC25G6LSK8m%2BEsz%2BAl%2BLqMzI4MWyocmvHQ%3D%3D",
                    "name": "Oracle Database"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/DBA/mysql-logo-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=n5CfaqLh2TQVOiCnANrWRDsinsrPc3x6zifiPnbrtdg4okukKh0ZqwRNaoIk0FhajkaPaNFhB23UFoTiS6uOqvxaQoNhhx%2FnOxLv9MyIM%2FaLsQiTbYghAW4Cc3vVzSsz%2FwGHju3q0IariLugi03Kr2BEal4Ird%2BasSpmzYXeUapnoHQE26bt7RuFiFLjZk6HpLiGq2S5j0jFCles%2BqpL3GObPsMORESp7J38VFXi5LkXN9zYCILFH1MP6oEmtbfxVFt2FYxbx%2FlJhyddJ3yq6o8nLUK6sp4%2FpIi1l6pQxs4OBhnVS9uCPjSe6fjawl14GLehISMk8AEwohuEGDABQ%3D%3D",
                    "name": "MySQL"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/DBA/cassandra-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=KTx4IBS8eJ2yIPLhjM8714wpTnlxZnvXCv0b%2FqLRnRRlBw0xLjZuhvIkg8gFoss8DqD41nTQzBivz1UguwBhIelBo561uIvRilLFUUZV2%2FOLYC1%2B%2F4CJC%2B9q9dTvgCqSROk8uQ8oDgvY%2Bqkh%2BwPjk4JC0c00Ph953XWL0SxW4wTzMmlDlw4mP9KQe18ap6AcU2b0kRidQWDLwcOER%2Fe5gRr5qfjH9dIA8HduHOgYS0AOHEAxPdynUWUMymWE2hMiLrMHH4PlT7gTPHnFClMvTM9YL3IBEU6XiJYiXOQ7FSRxw3fbJvLP4PgiHqtfYLEScAMQ8GPs9SkI7Eshuo%2BYPQ%3D%3D",
                    "name": "Cassandra"
                }
            ],
            "devops": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Devops/aws-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=J5NgN4YVJvKY7Jw4uPUg3v9lrwhMdniW0nsEIwKWe9XqsWywy%2ByREFodmlQcEOF7ff4WLuem%2BPKpCdov7uz%2BwQdbcRQJ28o%2Bvv9rBMkRsq0j29o97R88wnmrJ2SGDpAeHpcWb56KEZWwsQixr0cNWmC7%2FHqw3OKey11XRjoDplJivfAMMmNmklMmnmccx8BL1hL%2Fs4EeQEvHP0gzJ8QV%2FwomCxZtQ7K6xkK3AACh5ne233M%2BlHfmaG85Dq1PaOAuNsH%2FcxtmCzWMF9JZQjIyekx4Vgc8Rpp21GZhwFbBuiaL9xVlWxhuzxfDMnEZZ5XQ2xYBTNDe1lxMKAePVQNHqw%3D%3D",
                    "name": "AWS"
                }
            ]
        },
        "team_size": null
    },
    {
        "city": "Rawabi",
        "company_name": "ASAL Technologies",
        "industries": "Mobile development, Sales Force, Hardware Design Verification, Professional Services, software, Frontend Development , Backend Development, DevOps, R&D, Quality Assurance (Manual & Automation), Cloud Computing, Design Verification Services (EDA Tools Support and Application Engineering), and Hardware Services",
        "other_details": "",
        "stacks": {
            "available_stacks": [
                "dba",
                "devops",
                "mobile",
                "backend",
                "frontend"
            ],
            "backend": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Backend/cpp3-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=kmN8qmriHoeM%2FI%2FqYyCKTj%2F0h%2FzV5EgR4a8WoNwWjr6wb5kvkYqfAQWA12Ax4TINncbGo5JMKVS9a3%2FxU%2BDW0F8xfm7ykU03t1w4pcDnWzEhTtzF3La%2B58kqK9MdZIc7k0Qp33%2B9Q0yOan0lsU7xbE0yNdXvF81%2FQ2W6LiDvPaJQTWubG9WhNaj7tYgt5AWyoQl%2FaYTOTf3m5%2BzMeNAq5KW5bgxZfXBWMMBeTaZuhA9plBrdDWeAITG0cpgXFLAwZEAM9S2%2BPlUH%2B8jokjK9aFY1Plz%2Bb39%2FB%2F6M%2BwACaIrHQuAscn3SI4hX5xNi2MyNYfDf1xOQT9u8b6ePBq5%2F5g%3D%3D",
                    "name": "C++"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Backend/node-js-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=qmfNfZOes2GeudLjXHBabkQaUAshlDANp1Mk7asnnfWWA9XIO%2FmjGJGeE58mtmdrU%2BbkHeqfJr0HufRQQc3s8T24TSTTU7aKq3UHguDW%2F4DIPhNbzWRzpbl4VH5fKoIHmzY40ewGJRfrnUvRzYUgI3BXiZuPlQ%2FCZxCrfqxCjGqpO1WKqBHswwffBJd2vy1UJSQVoAi9QketM%2B%2FlDNfzSA%2BYusDgPcx5TZQ05LqCdNUUjEIQIIotclKhzlhxfdtWlF%2F1tIoNB5J99fzxn5ai9EOmU%2BMyQPtK2rawg5wf8S7nyYHx448yQMMGOkGkXQqxOOIAi9O6n8LNaPA3pE2yLA%3D%3D",
                    "name": "Node.js"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Backend/dotnet-vertical.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=nnLzD5RcVKfECUD%2BL5v65%2BWvHpc1P4PPtzwcXaYAamXP%2B1i6j%2BDc4tlPeFToCI6umXr28RFDPz5mAOFXg8R8L94k5rFsNfodkjKXhkmM26Lwrd4E7pUTdMbvR9Hlof5KTf6qzgStjI%2Bbvsc7VEhz9Mn2PVZNn6A13WUYHqYscIj7paUJyyoyyS11ODiYppzQeY202AfkxqqN%2BTCUm6XSjMDHhJdliZAutOwXYQXv%2Fpf2KOWE2kqJR1I9wwJbo4%2BdRametrUJqhhXYl3kqcEt7DagFftzMHOpoFtAw0FalX2A06uRUmEpkdNOcCQowcLTjBs1FHh%2FRIw0ftl5YIWJaQ%3D%3D",
                    "name": "ASP.NET Core"
                }
            ],
            "dba": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/DBA/oracle-6.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=WfuWdutnWzh5paL%2BwoRNd5Qxb71HQD%2BMNU0v%2FNAhBdq7DZBXRXEOvEGYTrx4YwHT4F6BFSFz9jK%2FR1F6UnT2Iv44qWg2Dsh6m7w6w6z4iE%2ByqsfCOyq7%2FsGdpGMlr65CukwfxofrHB2KdXGG1%2BvAimxhLPHyp3BIM4sj0Khy8ISE4mbysSDzmj3nHBuu7%2BSoIdE4ugraEVuOKeKFRB8O008NWjT90HMj953xL5C20ZwBBrUwYnR2HeIkzQaMZHQ%2BY%2Bx8hcQFSTunGrZt0UaPArRe%2BH6DDMfQwrCgNIYwcZVE4iFIKS3rtC25G6LSK8m%2BEsz%2BAl%2BLqMzI4MWyocmvHQ%3D%3D",
                    "name": "Oracle Database"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/DBA/mysql-logo-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=n5CfaqLh2TQVOiCnANrWRDsinsrPc3x6zifiPnbrtdg4okukKh0ZqwRNaoIk0FhajkaPaNFhB23UFoTiS6uOqvxaQoNhhx%2FnOxLv9MyIM%2FaLsQiTbYghAW4Cc3vVzSsz%2FwGHju3q0IariLugi03Kr2BEal4Ird%2BasSpmzYXeUapnoHQE26bt7RuFiFLjZk6HpLiGq2S5j0jFCles%2BqpL3GObPsMORESp7J38VFXi5LkXN9zYCILFH1MP6oEmtbfxVFt2FYxbx%2FlJhyddJ3yq6o8nLUK6sp4%2FpIi1l6pQxs4OBhnVS9uCPjSe6fjawl14GLehISMk8AEwohuEGDABQ%3D%3D",
                    "name": "MySQL"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/DBA/mongodb-icon-1.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=HX7TnjMWoitg2itBck%2B5rlkTaWgysmwDE%2BZpYRvZlUJc05hbOkr3WsNBegNEDOzmG9MmvEW87MU5YYaUCGhMVD1XyqoNVjHrwJuzt%2Bo%2FD71V9b2iGCyGcvpJN6eo20DJCaYYAfjlIHU1SVURIKkUgR09w53lpExiUQ5gbjzbWxjtxWNECUKJ5sqdKpdWqUhgkuZaGu1YlE%2Fbqpok6uaQ1sEis6Ph8n8ejj0PMO7RGghaDprF4RaORbtXCl5Too00K6IyFrMEx62DxTA%2F0qvyLZDDlxg%2FkZMGcbJtrYmPwFgMmzXxVCujZS2WbbQa1%2FmxAtl5dIWnQbDAxsQV2PQJqg%3D%3D",
                    "name": "MongoDB"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/DBA/cassandra-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=KTx4IBS8eJ2yIPLhjM8714wpTnlxZnvXCv0b%2FqLRnRRlBw0xLjZuhvIkg8gFoss8DqD41nTQzBivz1UguwBhIelBo561uIvRilLFUUZV2%2FOLYC1%2B%2F4CJC%2B9q9dTvgCqSROk8uQ8oDgvY%2Bqkh%2BwPjk4JC0c00Ph953XWL0SxW4wTzMmlDlw4mP9KQe18ap6AcU2b0kRidQWDLwcOER%2Fe5gRr5qfjH9dIA8HduHOgYS0AOHEAxPdynUWUMymWE2hMiLrMHH4PlT7gTPHnFClMvTM9YL3IBEU6XiJYiXOQ7FSRxw3fbJvLP4PgiHqtfYLEScAMQ8GPs9SkI7Eshuo%2BYPQ%3D%3D",
                    "name": "Cassandra"
                }
            ],
            "devops": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Devops/aws-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=J5NgN4YVJvKY7Jw4uPUg3v9lrwhMdniW0nsEIwKWe9XqsWywy%2ByREFodmlQcEOF7ff4WLuem%2BPKpCdov7uz%2BwQdbcRQJ28o%2Bvv9rBMkRsq0j29o97R88wnmrJ2SGDpAeHpcWb56KEZWwsQixr0cNWmC7%2FHqw3OKey11XRjoDplJivfAMMmNmklMmnmccx8BL1hL%2Fs4EeQEvHP0gzJ8QV%2FwomCxZtQ7K6xkK3AACh5ne233M%2BlHfmaG85Dq1PaOAuNsH%2FcxtmCzWMF9JZQjIyekx4Vgc8Rpp21GZhwFbBuiaL9xVlWxhuzxfDMnEZZ5XQ2xYBTNDe1lxMKAePVQNHqw%3D%3D",
                    "name": "AWS"
                }
            ],
            "frontend": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Frontend/angular-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=DXOtGNsTmRUpOWxckE0gtP9OV%2FT4P%2F25VdlTJ%2BsBlfGS8bkZz1GxwyGrTB%2BRMVzL3%2BJDh4Sb0kxyU%2Fw3OUUUPUk0R2FFHz%2F1niw63ilkq5Nq2jc8XkVZcY1GLoiiO58Ybi7lep070YxFrm0yRrJurdSAqw0oONRWAKMMsOiPMnre85gwdgUN%2BD9adCKSJrgHrKHe5Su0mA0E8dG5Iq%2BfDu3WI%2BZRn9cpFrZJbHTsq5ROM%2Bbm0QuTZdNpt643eu9BzUvCuFWsFwADGV%2Fl6vjQOC3itekHEdCNeebqV5hpt3EUQz1eYHt0ZXG3ShHFZNyBHfVhYVQ%2Bypcq5kJ0mRrVoA%3D%3D",
                    "name": "Angular"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Frontend/react-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=EGLEBZdx3ngUMIVfpIacWuLH2RM0Kn2kuu6N7nRzRXg8O7AUDJG%2BNVbSNCLleLMDecF2JktLXdLPIJBzLzwh72aIU9O%2FrqaH2tkZbbpIMjCYfFEjfwLXnZQRdDjI9Hzg1YvKOXoo1%2Bj0NJ0xp0BQENSynG65DXs6N21x3Ug0R6aqcu0HZ5487JlfHdk0OpqIq%2BYplecMOEfdOld0W9omoPFK5K1%2FtKh0CVf7ln5Oa%2BpGYjgXllAlwqduFYS7eIq9piOPgf%2FFiTok6%2FIyY2w5xIycVb6erwKtz53I%2Fs4BLQHlGOmtE7mbS3UEuuFdjAtwwpREwOaC%2BDKtAGsb42T53g%3D%3D",
                    "name": "React"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Frontend/vue-vuejs-javascript-js-framework-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=kXr5Vp4DFrWvHKH3swE3mEJ56%2FrAJiDKh%2FyYUBguzvwY37ymE1QleKlR10IZSho9%2Br0EWKtsk%2BZMwoZ%2BJ8yveLg9RpfTaCHN4vNYRZK1G%2BryikNrsOcw0O842QpSt42eVqm4OzlYTb6D0LneI8vDhLJJ%2FMdv%2F4TXA5KCXG1tvAkaaB7%2BzvjOkeJSvScRryRng0O5FLH04i3lFtex%2FeYztP5T0iQKiQhxJfR%2BZ5Setj6W890zjU1uotLhytSph%2FrctjCjVzkckNleY9k6XXZpaMpiNhGzcBurfjr9c2Y%2FLEu1UWLPfdV9G06cdAv9T1djqkeCnztRN7ewrJLQ4fwIrQ%3D%3D",
                    "name": "Vue.js"
                }
            ],
            "mobile": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Mobile/flutter-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=cHPyTRQU9UPyUKwLpBO6Ln9MAKlGjijzCJTucOGeVmQ5mLieQ6%2BjMTvbqcmrItP4XblY7E2%2B32Z4xzM5fTTrbeP74bDucH3lMG5ItaVFEM18obZGPqmFm3hG5Ny%2Br1ADxa4Rw67lCt0oCoJzcssOrqyz6%2Fv1agkCTG0vfVkpUfWWpno%2FWl8BW7ReUlQ2FgGcM1f7NPbmfjk6p2lMDkx6kL1PBvmdaBpjr11VRTto2mPGdcZ2OdA%2BW7K16h1lZzEQA%2BK2nLIb0Mg9xUSCLyomGCzrajg7rQNbo0TBcF%2F%2FhtRRoqdSBdeAYbzOzNS1vs6od5kdxQywe10cL%2BWn1XR4yw%3D%3D",
                    "name": "Flutter"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Mobile/react-svgrepo-com%281%29.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=Cf97eXxH3j6FPED%2B2kTnUD0JjJ%2FXXdA%2B%2FM1Gx4ss6kTfztTZMFD43xMRew6XZ9OVIwQh4ca%2B64XIgAFfImGqVG2O2g88GtSOWr0fWAGa1qo6xpUfsmIkFDiXPt5nveCfxCOti0CA5z4vzCcF%2FVhZlTr2omQz%2F2tyU%2FmmswbgEWpWPeFWc5uEFx01ACwjfrmEVnmbzPUGTbb4k04107SWDOXJ11K5awI3pT1qz7zWtvW7M46GM0SPH4EaoM4kD%2BDO9C3ymbRh8yfZ0ZHwH5ju5DuKCyOWAX0JcCK2nvO7tZrVGMwCvkM1xyCW14gK89W8WYpdBXXyxYnlGVxmA7B9jg%3D%3D",
                    "name": "React Native"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Mobile/swift-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=akPjis2X6Zfv8RFVd30bppduAdOpMHb0tortiwgEcFfdrDMlvpFiXinPeDVxr1voTx7bIzMw6MVEitHBPkq%2BJD9dz97zemvuYw3%2Ft4Q03Hx71W2srju%2B7J8tL9qWWIV7KqBEH%2FCPiAmTiVhn6ffHE0mfKBzXPWmo%2F2fGKb6GslA10LiLbQ%2BpgpPTLtXpfP1aCR%2B51Ufczapu4y0TuVRQEXHs8OXnhMA4J%2FT1adBEiSeVebGj5RQbzlSy9pzZfYd%2F6oVYXSGQvmitUDHkD82T4fv7x9VLjDApcWTfnWGV66FE%2Fa8GI8J6BIMGYqil5SEiOyRh0irfA5gBQMYD0wyazw%3D%3D",
                    "name": "Swift"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Mobile/kotlin-1-logo-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=WdDmKCRZp7KJc5f4KISwhRpTK6B2GItqzC8ng8aXv%2FnvhXhB1t28%2BMgFR8Yh567gDjwgMNg%2FtrVRyiSCUz%2B1krJtI5pU0NgK2IM2Lg2WPOwhkT6fpMCUcV8uDpQ3S3ZDQ0zgfZUbzIDJTp0ztpbxaeRC4esxjGVvh3F5Q%2BBoqQCIp7%2BV2zOqBRKLpfFQO3VQH5qvLSNocugxbHmWZMQ5Hs4mduXRuT5titGVxfiSebpw5%2Br3Dt6H8I9QTJjwjZ3C0xW%2FoBYIl%2Bm3YpSvA5nMhyZyxLlWTwmQDEBQ6I07uDMMO3mecMCIuiQH7%2FwWsaPj9G5SA7Cd84MpJWWBxJsdfw%3D%3D",
                    "name": "Kotlin"
                }
            ]
        },
        "team_size": "201-500"
    },
    {
        "city": "Ramallah",
        "company_name": "Freightos Ramallah",
        "industries": null,
        "other_details": "",
        "stacks": {
            "available_stacks": [
                "data_analytics",
                "backend",
                "frontend",
                "dba",
                "devops"
            ],
            "backend": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Backend/spring-3.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=fjxpeD5yVZa1jiO7TAy4ltUELq5lP7QcLNRbX3tI6HFLnDTDdaootDP811xgfPU5df9dM6r6cGAW1OeCLCQ0YNp9wZig%2FUtRUe16CLPX07%2FanQHjEyPn45VMhBORCLbbc%2FDJlIMrt1%2BMTmrgyerH4OAnOfcBA9E8zjlwtTqMmuG0cs1kNShswICQd6AA%2FFfkyo7vjSejeEGiYMBMB%2F37KeBouakXOSSiNn%2BFUY1s5DAQ0EX9yeXKxSaoPYMTLsV0qobbv0MaUx1eaS0G8vSgoMXxRREttEHscwQOobmRwD7vBrVhDlXsk0Vq9%2BmI2OMd5hId7xcPYsHM2hSWNp3aYg%3D%3D",
                    "name": "Spring Boot"
                }
            ],
            "data_analytics": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Data-Analytics/python-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=T7COWNk5SAK6vWHQywQt5w94lsCNl2U5W2FkSYV1AsIFKsxJcxeZlvGamNfsGTOfZLrEXYUXIfCNcFLjYe3BHhIV2wq3zeDeOUK6Ln15be4QUWAW%2FWYHupt3UH9MV4%2F%2FMtHKVv3qV0YEK1kj9IrRjvz%2BlZxALHiVCd184j2zsi8JFlwoBAuqqrqNbkotUT%2BcW5avsI%2B7ti0jO2Hlu0rmt0sXkC1iL6NddAbbG6d5Pk6pCL2MdIcJnnI6aAxreLxvXd4%2BVP6lQAu%2FUnuL3KrujxFmHzkgYFJs1jQky%2Fa%2FP6jckf7h1k1OIGfhhLVcl9Nkp4uWZrjSBLuEx5X51Kp1%2BQ%3D%3D",
                    "name": "Python"
                }
            ],
            "dba": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/DBA/mysql-logo-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=n5CfaqLh2TQVOiCnANrWRDsinsrPc3x6zifiPnbrtdg4okukKh0ZqwRNaoIk0FhajkaPaNFhB23UFoTiS6uOqvxaQoNhhx%2FnOxLv9MyIM%2FaLsQiTbYghAW4Cc3vVzSsz%2FwGHju3q0IariLugi03Kr2BEal4Ird%2BasSpmzYXeUapnoHQE26bt7RuFiFLjZk6HpLiGq2S5j0jFCles%2BqpL3GObPsMORESp7J38VFXi5LkXN9zYCILFH1MP6oEmtbfxVFt2FYxbx%2FlJhyddJ3yq6o8nLUK6sp4%2FpIi1l6pQxs4OBhnVS9uCPjSe6fjawl14GLehISMk8AEwohuEGDABQ%3D%3D",
                    "name": "MySQL"
                }
            ],
            "devops": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Devops/kubernetes-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=hH%2FNU6y%2BZfDM2X2Pb%2Ba%2BjbVt7puZ4EBFtiSxhOTS0O5L6eXPoORTF0bnLYAGrOu7rigE55Vf0hUihqESZaaOh8FImI3cbF%2FmYguKB61JHsiaaOxHFKN6EdxScy686q1ic2iNtLnsbJTcrjZsGYwWpZrpnOzmdB0vdXBlgU%2BfP6LGeARwmQJXj5MIj6SPspuMaQJwwy%2B6M0%2BZRrfcgFQVE0N7ejsV8AIVbfH%2BovIJy2lK9rbKLKklm%2FybS%2FW9KJSEFwU5JL%2FD3qKVYdhYtYt5zeOzPJvsXXoOb8okOxRkx1pqRwQCjJ87IhGXFUoQbKRyrsZFIaOy%2FYR7eTli1gTXeQ%3D%3D",
                    "name": "Kubernetes"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Devops/jenkins-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=Ro0C3iIDHubaDfm%2BP3qX3AF4liXP%2Fhel39j7XTVaB2GGCMIBmilLXUq8UHMusBquy%2BJhbfq%2B%2Bk2HuyDgLXstrvloJq9JRXpH2PQLsfPFQ5biWTik%2FN5mJ3L%2FzyqXf3xbHxS0oP3X96MYJFhoEYFztPnKtC0Bo0zqBqBaGWhduOD44ZMVsZjcmT0qecU6on7NygtjHVtK%2BxT2LkieoDGkh%2FHoFx65NaoyxEIxpVRXgUCxR0xTRhAkCGUfAFGKfK%2BHT3yEJ4z7oMqR3%2FUHraHj6QL81pNikxnlzF68v2osMZSBLlkj7JBpDbIBMqI79KFuPWdrqNPIX2tDYnncRv5FzQ%3D%3D",
                    "name": "Jenkins"
                }
            ],
            "frontend": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Frontend/react-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=EGLEBZdx3ngUMIVfpIacWuLH2RM0Kn2kuu6N7nRzRXg8O7AUDJG%2BNVbSNCLleLMDecF2JktLXdLPIJBzLzwh72aIU9O%2FrqaH2tkZbbpIMjCYfFEjfwLXnZQRdDjI9Hzg1YvKOXoo1%2Bj0NJ0xp0BQENSynG65DXs6N21x3Ug0R6aqcu0HZ5487JlfHdk0OpqIq%2BYplecMOEfdOld0W9omoPFK5K1%2FtKh0CVf7ln5Oa%2BpGYjgXllAlwqduFYS7eIq9piOPgf%2FFiTok6%2FIyY2w5xIycVb6erwKtz53I%2Fs4BLQHlGOmtE7mbS3UEuuFdjAtwwpREwOaC%2BDKtAGsb42T53g%3D%3D",
                    "name": "React"
                }
            ]
        },
        "team_size": "51-200"
    },
    {
        "city": "Ramallah",
        "company_name": "Harri",
        "industries": null,
        "other_details": "",
        "stacks": {
            "available_stacks": [
                "devops",
                "mobile",
                "backend",
                "frontend"
            ],
            "backend": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Backend/django-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=WpucFMSf3IrHg9X3WAIKeuZ%2BVwVmf8S7g%2B0JHGUZb9O2%2B4pfJBPSIhEWle0%2F%2Ftajl%2FexkCyYwLbR8qqGs6h8Qi7SKgXVHeZegcTfmFCH9VlZhE5ptYPMx3vZGJHm01MqcxxtcODH7zRTPKIvy%2BxDw2wKX8TXWNvhJCJ7peQRAxNlRkwQ1Le35L6N4hTmsd1V0LRUc9zLRrM6bn4OV2OahNXmzHI7hxoiWTn2ONwqBHEQuSN2lWhVHFVP%2FR3Q%2FnR9CzZCYF9bsNuQAjKlX0uMNlWQAYITwOeFnCVYyTXLwzzL%2B8xbxY8QP9L9CqXLj%2FvpQpRFTYjQ8vidAb4cd6arRQ%3D%3D",
                    "name": "Django"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Backend/spring-3.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=fjxpeD5yVZa1jiO7TAy4ltUELq5lP7QcLNRbX3tI6HFLnDTDdaootDP811xgfPU5df9dM6r6cGAW1OeCLCQ0YNp9wZig%2FUtRUe16CLPX07%2FanQHjEyPn45VMhBORCLbbc%2FDJlIMrt1%2BMTmrgyerH4OAnOfcBA9E8zjlwtTqMmuG0cs1kNShswICQd6AA%2FFfkyo7vjSejeEGiYMBMB%2F37KeBouakXOSSiNn%2BFUY1s5DAQ0EX9yeXKxSaoPYMTLsV0qobbv0MaUx1eaS0G8vSgoMXxRREttEHscwQOobmRwD7vBrVhDlXsk0Vq9%2BmI2OMd5hId7xcPYsHM2hSWNp3aYg%3D%3D",
                    "name": "Spring Boot"
                }
            ],
            "devops": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Devops/aws-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=J5NgN4YVJvKY7Jw4uPUg3v9lrwhMdniW0nsEIwKWe9XqsWywy%2ByREFodmlQcEOF7ff4WLuem%2BPKpCdov7uz%2BwQdbcRQJ28o%2Bvv9rBMkRsq0j29o97R88wnmrJ2SGDpAeHpcWb56KEZWwsQixr0cNWmC7%2FHqw3OKey11XRjoDplJivfAMMmNmklMmnmccx8BL1hL%2Fs4EeQEvHP0gzJ8QV%2FwomCxZtQ7K6xkK3AACh5ne233M%2BlHfmaG85Dq1PaOAuNsH%2FcxtmCzWMF9JZQjIyekx4Vgc8Rpp21GZhwFbBuiaL9xVlWxhuzxfDMnEZZ5XQ2xYBTNDe1lxMKAePVQNHqw%3D%3D",
                    "name": "AWS"
                }
            ],
            "frontend": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Frontend/angular-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=DXOtGNsTmRUpOWxckE0gtP9OV%2FT4P%2F25VdlTJ%2BsBlfGS8bkZz1GxwyGrTB%2BRMVzL3%2BJDh4Sb0kxyU%2Fw3OUUUPUk0R2FFHz%2F1niw63ilkq5Nq2jc8XkVZcY1GLoiiO58Ybi7lep070YxFrm0yRrJurdSAqw0oONRWAKMMsOiPMnre85gwdgUN%2BD9adCKSJrgHrKHe5Su0mA0E8dG5Iq%2BfDu3WI%2BZRn9cpFrZJbHTsq5ROM%2Bbm0QuTZdNpt643eu9BzUvCuFWsFwADGV%2Fl6vjQOC3itekHEdCNeebqV5hpt3EUQz1eYHt0ZXG3ShHFZNyBHfVhYVQ%2Bypcq5kJ0mRrVoA%3D%3D",
                    "name": "Angular"
                }
            ],
            "mobile": [
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Mobile/swift-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=akPjis2X6Zfv8RFVd30bppduAdOpMHb0tortiwgEcFfdrDMlvpFiXinPeDVxr1voTx7bIzMw6MVEitHBPkq%2BJD9dz97zemvuYw3%2Ft4Q03Hx71W2srju%2B7J8tL9qWWIV7KqBEH%2FCPiAmTiVhn6ffHE0mfKBzXPWmo%2F2fGKb6GslA10LiLbQ%2BpgpPTLtXpfP1aCR%2B51Ufczapu4y0TuVRQEXHs8OXnhMA4J%2FT1adBEiSeVebGj5RQbzlSy9pzZfYd%2F6oVYXSGQvmitUDHkD82T4fv7x9VLjDApcWTfnWGV66FE%2Fa8GI8J6BIMGYqil5SEiOyRh0irfA5gBQMYD0wyazw%3D%3D",
                    "name": "Swift"
                },
                {
                    "icon": "https://storage.googleapis.com/stacksinfo.appspot.com/Mobile/kotlin-1-logo-svgrepo-com.svg?GoogleAccessId=firebase-adminsdk-si8wq%40stacksinfo.iam.gserviceaccount.com&Expires=16730316000&Signature=WdDmKCRZp7KJc5f4KISwhRpTK6B2GItqzC8ng8aXv%2FnvhXhB1t28%2BMgFR8Yh567gDjwgMNg%2FtrVRyiSCUz%2B1krJtI5pU0NgK2IM2Lg2WPOwhkT6fpMCUcV8uDpQ3S3ZDQ0zgfZUbzIDJTp0ztpbxaeRC4esxjGVvh3F5Q%2BBoqQCIp7%2BV2zOqBRKLpfFQO3VQH5qvLSNocugxbHmWZMQ5Hs4mduXRuT5titGVxfiSebpw5%2Br3Dt6H8I9QTJjwjZ3C0xW%2FoBYIl%2Bm3YpSvA5nMhyZyxLlWTwmQDEBQ6I07uDMMO3mecMCIuiQH7%2FwWsaPj9G5SA7Cd84MpJWWBxJsdfw%3D%3D",
                    "name": "Kotlin"
                }
            ]
        },
        "team_size": ""
    }
]