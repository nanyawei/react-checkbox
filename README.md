[TOC]
### 一个超级简单的checkbox

#### Checkbox Props
| 参数名 | 类型 | 是否必须 |
| --- | --- | --- |
| defaultChecked | boolean | n |
| checked | boolean | n |
| disabled | boolean | n |
| required | boolean | n |
| onChange | function | n |
| onClick | function | n |
| className | string | n |
| children | React.ReactNode | n |


#### Checkbox.Group Props
| 参数名 | 类型 | 是否必须 |
| --- | ------------------------------------ | --- |
| options | [ (CheckboOptionType or string)[] ](#checkboxoptiontype) | y |
| value | string[] | n |
| disabled | boolean | n |
| onChange | function | n |

##### CheckboxOptionType
| 参数名 | 类型 | 是否必须 |
| --- | --- | --- |
| label | string | y |
| value | string | y |
| disabled | boolean | n |
