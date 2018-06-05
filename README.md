![](https://www.simplicite.io/resources//logos/logo250.png)
* * *

`Test` module definition
========================

This module is for testing standard features

`TestObject1` business object definition
----------------------------------------



### Fields

| Name                                                         | Type                                     | Req | Upd | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | --- | --- | -------------------------------------------------------------------------------- |
| `tstObj1Code`                                                | regexp(20)                               | x*  |     | -                                                                                |
| `tstObj1Desc`                                                | html(4000)                               |     | x   | -                                                                                |
| `tstObj1File`                                                | document                                 |     | x   | File                                                                             |
| `tstObj1List`                                                | enum(7) using `TST_OBJ1_LIST` list       |     | x   | List                                                                             |
| `tstObj1Address`                                             | char(100)                                |     | x   | Address                                                                          |
| `tstObj1Coords`                                              | geocoords                                |     | x   | -                                                                                |

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

| Name                                                         | Type                                     | Req | Upd | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | --- | --- | -------------------------------------------------------------------------------- |
| `tst1aDesc`                                                  | char(100)                                |     | x   | -                                                                                |

### Custom actions

No custom action

`TestObject2` business object definition
----------------------------------------



### Fields

| Name                                                         | Type                                     | Req | Upd | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | --- | --- | -------------------------------------------------------------------------------- |
| `tstObj2Obj1Id` link to **`TestObject1`**                    | id                                       | x*  | x   | -                                                                                |
| _Ref. `tstObj2Obj1Id.tstObj1Code`_                           | _regexp(20)_                             |     |     | -                                                                                |
| _Ref. `tstObj2Obj1Id.tstObj1Address`_                        | _char(100)_                              |     |     | _Address_                                                                        |
| _Ref. `tstObj2Obj1Id.tstObj1Coords`_                         | _geocoords_                              |     |     | -                                                                                |

### Custom actions

No custom action

`TestObjectDS` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Req | Upd | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | --- | --- | -------------------------------------------------------------------------------- |
| `tstDSLabel`                                                 | char(100)                                | x*  | x   | -                                                                                |

### Custom actions

No custom action

`TestUser` business object definition
-------------------------------------



### Fields

| Name                                                         | Type                                     | Req | Upd | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | --- | --- | -------------------------------------------------------------------------------- |

### Custom actions

No custom action

