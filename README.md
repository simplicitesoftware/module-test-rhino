![](https://www.simplicite.io/resources//logos/logo250.png)
* * *

`Test` module definition
========================

This module is for testing standard features

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

### Custom actions

No custom action

`TestObject1` business object definition
----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `tstObj1Code`                                                | regexp(20)                               | yes*     |           |          | -                                                                                |
| `tstObj1Desc`                                                | html(4000)                               |          | yes       |          | -                                                                                |
| `tstObj1File`                                                | document                                 |          | yes       |          | File                                                                             |
| `tstObj1List`                                                | enum(7) using `TST_OBJ1_LIST` list       |          | yes       |          | List                                                                             |
| `tstObj1Address`                                             | char(100)                                |          | yes       |          | Address                                                                          |
| `tstObj1Coords`                                              | geocoords                                |          | yes       |          | -                                                                                |
| `TestObject1_TestJavaObject_id` link to **`TestJavaObject`** | id                                       |          | yes       |          | -                                                                                |
| `tstObj1Lookup`                                              | char(256)                                |          | yes       |          | Lookup                                                                           |

### Lists

* `TST_OBJ1_LIST`
    - `V1` Val 1
    - `V2` Val 2
    - `V3` Val 3
    - `V4` Val 4

### Custom actions

No custom action

`TestObject1a` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `tst1aDesc`                                                  | char(100)                                |          | yes       |          | -                                                                                |

### Custom actions

No custom action

`TestObject2` business object definition
----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `tstObj2Obj1Id` link to **`TestObject1`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `tstObj2Obj1Id.tstObj1Code`_                           | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `tstObj2Obj1Id.tstObj1Address`_                        | _char(100)_                              |          |           |          | _Address_                                                                        |
| _Ref. `tstObj2Obj1Id.tstObj1Coords`_                         | _geocoords_                              |          |           |          | -                                                                                |

### Custom actions

No custom action

`TestObjectDS` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `tstDSLabel`                                                 | char(100)                                | yes*     | yes       |          | -                                                                                |

### Custom actions

No custom action

`TestUser` business object definition
-------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |

### Custom actions

No custom action

`TestExtObject` external object definition
------------------------------------------




