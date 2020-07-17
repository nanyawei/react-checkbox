### 一个超级简单的checkbox

#### Checkbox Props
| 参数名 | 类型 | 参数说明 | 是否必须 |
| --- | --- | -------- | --- |
| className | string | 样式类名 | n |
| defaultChecked | boolean | 默认选中状态  | n |
| children | React.ReactNode | 内容文本 | n |
| disabled | boolean | 禁止点击 | n |
| required | boolean | 是否必填 | n |
| checked | boolean | 当前状态 | n |
| onClick | function | 点击事件 | n |
| onChange | function | 改变事件 | n |
| value | string | value值 | n |
| partial | string | 是否为半选状态 | n |


#### Checkbox.Group Props
| 参数名 | 类型 | 参数说明 | 是否必须 |
| --- | ------------------------------------ | --- | --- |
| options | [ (CheckboOptionType or string)[] ](#checkboxoptiontype) | checkbox参数 | y |
| value | string[] | 选中值 | n |
| disabled | boolean | 禁止状态 | n |
| onChange | function | 改变事件 | n |

##### CheckboxOptionType
| 参数名 | 类型 | 是否必须 |
| --- | --- | --- |
| label | string | y |
| value | string | y |
| disabled | boolean | n |
