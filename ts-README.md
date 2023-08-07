keyof 获取对象的属性值，只能用于对象
typeof 获取其类型和必传属性
partial 变成可选项
Required 变成必选项
pick 获取指定属性的类型，得到新类型  
------type ObjType = {name: string;age: number;}
------type Person = Pick<ObjType, 'name'> == type ObjType = {name: string}

## 使用案例

### 1.默认值以及类型设置 https://www.cnblogs.com/qiqi715/p/14954081.html

const defaultProps = {
name: 'Stranger',
age: 1
};

type IProps = typeof defaultProps; ====> 等价于 {name：string,age:number}
type IProps1 = Partial<typeof defaultProps>; ====> 等价于 {name?：string,age?:number}
type IProps2 = {like: number} & Partial<typeof defaultProps >; ====> 等价于 {like：number,name?：string,age?:number}
