<!--
 ___ _            _ _    _ _    __
/ __(_)_ __  _ __| (_)__(_) |_ /_/
\__ \ | '  \| '_ \ | / _| |  _/ -_)
|___/_|_|_|_| .__/_|_\__|_|\__\___|
            |_| 
-->
![](https://docs.simplicite.io//logos/logo250.png)
* * *

`Test` module definition
========================

This module is for testing platform features.

All items in this module are developped in Rhino.

`TestLDAP` business object definition
-------------------------------------

Test LDAP object

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `tstLdapLogin`                                               | char(100)                                |          |           |          | LDAP `cn` attribute                                                              |
| `tstLdapFirstName`                                           | char(100)                                |          | yes       |          | LDAP `givenName` attribute                                                       |
| `tstLdapLastName`                                            | char(100)                                |          | yes       |          | LDAP `sn` attribute                                                              |
| `tstLdapFullName`                                            | char(255)                                |          |           |          | Full name                                                                        |

`TestObject1` business object definition
----------------------------------------

Example 1 object

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `tstObj1Code`                                                | regexp(20)                               | yes*     |           |          | -                                                                                |
| `tstObj1Desc`                                                | html(4000)                               |          | yes       |          | -                                                                                |
| `tstObj1File`                                                | document                                 |          | yes       |          | File                                                                             |
| `tstObj1Image`                                               | image                                    |          | yes       |          | Image                                                                            |
| `tstObj1List`                                                | multi(30) using `TST_OBJ1_LIST` list     |          | yes       |          | List                                                                             |
| `tstObj1Year`                                                | enum(4) using `TST_OBJ1_YEAR` list       |          | yes       |          | Year (dynamic)                                                                   |
| `tstObj1Address`                                             | char(100)                                |          | yes       |          | Address                                                                          |
| `tstObj1Coords`                                              | geocoords                                |          | yes       |          | -                                                                                |
| `tstObj1Lookup`                                              | char(256)                                |          | yes       |          | Lookup                                                                           |
| `tstObj1Date`                                                | date                                     |          | yes       |          | -                                                                                |

### Lists

* `TST_OBJ1_LIST`
    - `V1` Val 1
    - `V2` Val 2
    - `V3` Val 3
    - `V4` Val 4
* `TST_OBJ1_YEAR`
    - `NONE` 

`TestObject1a` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `tst1aDesc`                                                  | char(100)                                |          | yes       |          | -                                                                                |

`TestObject2` business object definition
----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `tstObj2Obj1Id` link to **`TestObject1`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `tstObj2Obj1Id.tstObj1Code`_                           | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `tstObj2Obj1Id.tstObj1Address`_                        | _char(100)_                              |          |           |          | _Address_                                                                        |
| _Ref. `tstObj2Obj1Id.tstObj1Coords`_                         | _geocoords_                              |          |           |          | -                                                                                |

`TestObjectDS` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `tstDSLabel`                                                 | char(100)                                | yes*     | yes       |          | -                                                                                |

`TestUser` business object definition
-------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |

`TestExtObject` external object definition
------------------------------------------




