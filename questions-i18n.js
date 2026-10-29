/* 문제 번역 (영어·중국어) — Firebase 문제에 question_en / question_zh 등이 있으면 그것이 우선합니다. */
window.QUESTION_I18N = {
 "classes__QCLA001": {
  "en": {
   "question": "Define a class and make an object. Make an empty class Dog, create d=Dog(), and print type(d).__name__.",
   "hint": "Define with 'class Name:' and create an object (instance) with Name()."
  },
  "zh": {
   "question": "定义类并创建对象。创建空类 Dog，执行 d=Dog() 后输出 type(d).__name__。",
   "hint": "用 class 名称: 定义，用 名称() 创建对象（实例）。"
  }
 },
 "classes__QCLA002": {
  "en": {
   "question": "Use the constructor __init__. Make the Student class take name and store it in self.name, then print Student('Kim').name.",
   "hint": "__init__(self, name) runs automatically when an object is created."
  },
  "zh": {
   "question": "使用构造函数 __init__。让 Student 类接收 name 并存入 self.name，然后输出 Student('Kim').name。",
   "hint": "__init__(self, name) 在对象创建时自动执行。"
  }
 },
 "classes__QCLA003": {
  "en": {
   "question": "Make a method. Give the Dog class a bark(self) method that prints 'Woof!', then call Dog().bark().",
   "hint": "The first parameter of a method is always self."
  },
  "zh": {
   "question": "编写方法。为 Dog 类编写输出 'Woof!' 的 bark(self) 方法，并调用 Dog().bark()。",
   "hint": "方法的第一个参数总是 self。"
  }
 },
 "classes__QCLA004": {
  "en": {
   "question": "Have several attributes. Make a Product(name, price) class, create p=Product('Pen', 1500), and run print(p.name, p.price).",
   "hint": "Store values in the object with self.attribute = value."
  },
  "zh": {
   "question": "拥有多个属性。编写 Product(name, price) 类，创建 p=Product('Pen', 1500) 后执行 print(p.name, p.price)。",
   "hint": "用 self.属性 = 值 把值存入对象。"
  }
 },
 "classes__QCLA005": {
  "en": {
   "question": "Change an attribute value. Create an object c of the Car class (starting with speed=0), change it with c.speed = 60, and print c.speed.",
   "hint": "You can change it with object.attribute = new_value."
  },
  "zh": {
   "question": "修改属性值。创建 Car 类（speed 初始为 0）的对象 c，用 c.speed = 60 修改后输出 c.speed。",
   "hint": "可以用 对象.属性 = 新值 来修改。"
  }
 },
 "classes__QCLA006": {
  "en": {
   "question": "A method that returns a value. Give the Rectangle(w, h) class an area() method that returns its area, and print Rectangle(4, 5).area().",
   "hint": "Return self.w * self.h inside the method."
  },
  "zh": {
   "question": "返回值的方法。为 Rectangle(w, h) 类编写返回面积的 area()，并输出 Rectangle(4, 5).area()。",
   "hint": "在方法中 return self.w * self.h。"
  }
 },
 "classes__QCLA007": {
  "en": {
   "question": "Make several objects. Use the Student(name) class to create two objects, Kim and Lee, put them in a list, and print each name on its own line.",
   "hint": "Objects can also be put in a list and handled with a for loop."
  },
  "zh": {
   "question": "创建多个对象。用 Student(name) 类创建 Kim、Lee 两个对象放入列表，逐行输出每个名字。",
   "hint": "对象也可以放进列表，用 for 循环处理。"
  }
 },
 "classes__QCLA008": {
  "en": {
   "question": "Check with isinstance. Create an object a of class Animal and print isinstance(a, Animal).",
   "hint": "isinstance(object, class) tells you True/False whether it is an object of that class."
  },
  "zh": {
   "question": "用 isinstance 检查。创建 Animal 类的对象 a，并输出 isinstance(a, Animal)。",
   "hint": "isinstance(对象, 类) 用 True/False 告诉你它是否属于该类。"
  }
 },
 "classes__QCLA009": {
  "en": {
   "question": "A method that changes state. Give the Counter class (count=0) an increase() method that adds 1 to count, call it 3 times, then print count.",
   "hint": "Change the object's state with self.count += 1 inside the method."
  },
  "zh": {
   "question": "改变状态的方法。为 Counter 类（count=0）编写把 count 加 1 的 increase()，调用 3 次后输出 count。",
   "hint": "在方法中用 self.count += 1 改变对象的状态。"
  }
 },
 "classes__QCLA010": {
  "en": {
   "question": "Make a bank account. Give the Account(balance) class deposit(amount) and withdraw(amount); from Account(10000), deposit 5000 and withdraw 3000, then print balance.",
   "hint": "deposit increases balance and withdraw decreases it."
  },
  "zh": {
   "question": "创建银行账户。为 Account(balance) 类编写 deposit(amount) 和 withdraw(amount)，从 Account(10000) 存入 5000、取出 3000 后输出 balance。",
   "hint": "deposit 增加 balance，withdraw 减少 balance。"
  }
 },
 "classes__QCLA011": {
  "en": {
   "question": "Set the print format with __str__. Make __str__ so that printing Book(title, author) shows 'title - author', then run print(Book('데미안', '헤세')).",
   "hint": "__str__(self) returns the string shown by print()."
  },
  "zh": {
   "question": "用 __str__ 设置输出格式。编写 __str__，使 print Book(title, author) 时显示为 '书名 - 作者'，然后执行 print(Book('데미안', '헤세'))。",
   "hint": "__str__(self) 返回 print() 时显示的字符串。"
  }
 },
 "classes__QCLA012": {
  "en": {
   "question": "Use a class variable. Give the Student class the class variable school='우송대', and print the school of two objects a, b with print(a.school, b.school).",
   "hint": "A variable created directly under the class is shared by all objects."
  },
  "zh": {
   "question": "使用类变量。在 Student 类中设类变量 school='우송대'，用 print(a.school, b.school) 输出两个对象 a、b 的 school。",
   "hint": "直接在类下面创建的变量由所有对象共享。"
  }
 },
 "classes__QCLA013": {
  "en": {
   "question": "Count objects. Increase the class variable count=0 of the Member class with Member.count += 1 in __init__, create 3 objects, then print Member.count.",
   "hint": "Access and change a class variable with ClassName.variable."
  },
  "zh": {
   "question": "统计对象个数。在 __init__ 中用 Member.count += 1 增加 Member 类的类变量 count=0，创建 3 个对象后输出 Member.count。",
   "hint": "用 类名.变量 访问并修改类变量。"
  }
 },
 "classes__QCLA014": {
  "en": {
   "question": "Practice inheritance. In the Animal class, speak() prints '...'; make a Cat class that inherits Animal and call Cat().speak().",
   "hint": "Inheriting with class Child(Parent): lets you use the parent's methods as they are."
  },
  "zh": {
   "question": "练习继承。Animal 类的 speak() 输出 '...'，编写继承 Animal 的 Cat 类并调用 Cat().speak()。",
   "hint": "用 class 子类(父类): 继承后，可以直接使用父类的方法。"
  }
 },
 "classes__QCLA015": {
  "en": {
   "question": "Method overriding. Animal's speak() prints '...', and redefine speak() in Dog (which inherits it) to print '멍멍' (woof), then call Dog().speak().",
   "hint": "If the child class defines a method with the same name again, the child's version is used."
  },
  "zh": {
   "question": "方法重写。Animal 的 speak() 输出 '...'，在继承它的 Dog 中重新定义 speak() 输出 '멍멍'（汪汪），然后调用 Dog().speak()。",
   "hint": "子类中重新定义同名方法时，会使用子类的方法。"
  }
 },
 "classes__QCLA016": {
  "en": {
   "question": "Call another method from a method. Make a Cart class where add(price) puts prices in an items list and total() returns the sum; add 1000 and 2500, then print total().",
   "hint": "Prepare the list in __init__ with self.items = []."
  },
  "zh": {
   "question": "在方法中调用另一个方法。编写 Cart 类：add(price) 把价格放入 items 列表，total() 返回总和；添加 1000、2500 后输出 total()。",
   "hint": "在 __init__ 中用 self.items = [] 准备列表。"
  }
 },
 "classes__QCLA017": {
  "en": {
   "question": "Call the parent constructor with super(). Make Student(name, sid), which inherits Person(name), call super().__init__(name); create s=Student('Kim', '2026001') and run print(s.name, s.sid).",
   "hint": "super().__init__(name) runs the parent's __init__ for you."
  },
  "zh": {
   "question": "用 super() 调用父类构造函数。让继承 Person(name) 的 Student(name, sid) 调用 super().__init__(name)，创建 s=Student('Kim', '2026001') 后执行 print(s.name, s.sid)。",
   "hint": "super().__init__(name) 会执行父类的 __init__。"
  }
 },
 "classes__QCLA018": {
  "en": {
   "question": "Practice polymorphism. Put Cat and Dog objects whose speak() prints '야옹' (meow) and '멍멍' (woof) in a list, and call speak() on all of them with a for loop.",
   "hint": "Calling a method with the same name behaves differently depending on the object type."
  },
  "zh": {
   "question": "练习多态。把 speak() 分别输出 '야옹'（喵）和 '멍멍'（汪）的 Cat、Dog 对象放入列表，用 for 循环调用所有对象的 speak()。",
   "hint": "调用同名方法时，会根据对象的类型表现不同。"
  }
 },
 "classes__QCLA019": {
  "en": {
   "question": "Add withdrawal validation. When withdraw(5000) is called on Account(1000), it is more than the balance, so print '잔액 부족' (insufficient balance) and keep the balance unchanged; then print balance.",
   "hint": "Check with if amount > self.balance: inside the method."
  },
  "zh": {
   "question": "加入取款验证。对 Account(1000) 调用 withdraw(5000) 时，金额超过余额，应输出 '잔액 부족'（余额不足）且余额保持不变，然后输出 balance。",
   "hint": "在方法中用 if amount > self.balance: 检查。"
  }
 },
 "classes__QCLA020": {
  "en": {
   "question": "Use @property. Give the Circle(r) class an area property (3.14 * r * r) and print Circle(10).area without parentheses.",
   "hint": "A method with @property is read like an attribute, without parentheses."
  },
  "zh": {
   "question": "使用 @property。为 Circle(r) 类编写计算面积的 area 属性（3.14 * r * r），不加括号输出 Circle(10).area。",
   "hint": "加上 @property 的方法可以像属性一样不加括号读取。"
  }
 },
 "collections__QCOL001": {
  "en": {
   "question": "Add an element to a list. Add 'cherry' to fruits=['apple','banana'] with append() and print the list.",
   "hint": "list.append(value) adds one value at the end."
  },
  "zh": {
   "question": "向列表添加元素。用 append() 向 fruits=['apple','banana'] 添加 'cherry'，然后输出列表。",
   "hint": "列表.append(值) 在末尾添加一个值。"
  }
 },
 "collections__QCOL002": {
  "en": {
   "question": "Insert at a chosen position. Insert 2 at index 1 of nums=[1,3,4] with insert() and print it.",
   "hint": "Use insert(position, value)."
  },
  "zh": {
   "question": "插入到指定位置。用 insert() 在 nums=[1,3,4] 的索引 1 处插入 2 并输出。",
   "hint": "使用 insert(位置, 值)。"
  }
 },
 "collections__QCOL003": {
  "en": {
   "question": "Remove by value. Remove 'green' from colors=['red','green','blue'] with remove() and print it.",
   "hint": "remove(value) deletes the first occurrence of that value."
  },
  "zh": {
   "question": "按值删除。用 remove() 从 colors=['red','green','blue'] 中删除 'green' 并输出。",
   "hint": "remove(值) 删除第一次出现的该值。"
  }
 },
 "collections__QCOL004": {
  "en": {
   "question": "Take out the last element. Print the value taken out of stack=[10,20,30] with pop().",
   "hint": "pop() returns the last element and removes it from the list."
  },
  "zh": {
   "question": "取出最后一个元素。输出用 pop() 从 stack=[10,20,30] 中取出的值。",
   "hint": "pop() 返回最后一个元素并将其从列表中删除。"
  }
 },
 "collections__QCOL005": {
  "en": {
   "question": "Sort a list. Sort nums=[5,2,8,1] in ascending order with sort() and print it.",
   "hint": "sort() sorts the list itself and returns None."
  },
  "zh": {
   "question": "排序列表。用 sort() 把 nums=[5,2,8,1] 按升序排序后输出。",
   "hint": "sort() 对列表本身排序，返回 None。"
  }
 },
 "collections__QCOL006": {
  "en": {
   "question": "Add a value to a dictionary. Add the item 'major':'AI' to student={'name':'Kim'} and print it.",
   "hint": "Add with dictionary[new_key] = value."
  },
  "zh": {
   "question": "向字典添加值。向 student={'name':'Kim'} 添加 'major':'AI' 项后输出。",
   "hint": "用 字典[新键] = 值 添加。"
  }
 },
 "collections__QCOL007": {
  "en": {
   "question": "Look up safely with get(). Print the result of d.get('b', 0) for d={'a':1}.",
   "hint": "get(key, default) returns the default when the key is missing."
  },
  "zh": {
   "question": "用 get() 安全查询。输出 d={'a':1} 中 d.get('b', 0) 的结果。",
   "hint": "get(键, 默认值) 在键不存在时返回默认值。"
  }
 },
 "collections__QCOL008": {
  "en": {
   "question": "Add elements to a set. Add 3 to s={1,2} with add(), also add the existing 2, then print s.",
   "hint": "A set does not allow duplicates, so the same value goes in only once."
  },
  "zh": {
   "question": "向集合添加元素。用 add() 向 s={1,2} 添加 3，再添加已存在的 2，然后输出 s。",
   "hint": "集合不允许重复，相同的值只会存一次。"
  }
 },
 "collections__QCOL009": {
  "en": {
   "question": "Sort in descending order. Print a new list of scores=[70,95,82] sorted with sorted(..., reverse=True).",
   "hint": "sorted() returns a new list; reverse=True means descending."
  },
  "zh": {
   "question": "降序排序。输出用 sorted(..., reverse=True) 对 scores=[70,95,82] 排序得到的新列表。",
   "hint": "sorted() 返回新列表，reverse=True 表示降序。"
  }
 },
 "collections__QCOL010": {
  "en": {
   "question": "Extend a list. Attach the elements of b=[3,4] to a=[1,2] with extend() and print a.",
   "hint": "append adds the whole thing as 1 item; extend adds elements one by one."
  },
  "zh": {
   "question": "扩展列表。用 extend() 把 b=[3,4] 的元素接到 a=[1,2] 后面，然后输出 a。",
   "hint": "append 把整体作为 1 个元素添加，extend 逐个添加元素。"
  }
 },
 "collections__QCOL011": {
  "en": {
   "question": "Find the position of a value. Print the index of 'Park' in names=['Kim','Lee','Park'] with index().",
   "hint": "list.index(value) returns the first position of that value."
  },
  "zh": {
   "question": "查找值的位置。用 index() 输出 names=['Kim','Lee','Park'] 中 'Park' 的索引。",
   "hint": "列表.index(值) 返回该值第一次出现的位置。"
  }
 },
 "collections__QCOL012": {
  "en": {
   "question": "Iterate over a dictionary. Loop over items() of prices={'apple':1000,'banana':500} and print 'key:value' one per line.",
   "hint": "items() gives (key, value) pairs. Print with f'{k}:{v}'."
  },
  "zh": {
   "question": "遍历字典。用 for 循环遍历 prices={'apple':1000,'banana':500} 的 items()，逐行输出 '键:值'。",
   "hint": "items() 返回（键, 值）对。用 f'{k}:{v}' 输出。"
  }
 },
 "collections__QCOL013": {
  "en": {
   "question": "Sum only the dictionary values. Print the sum of values() of sales={'Mon':120,'Tue':80,'Wed':100}.",
   "hint": "Take only the values with values(), then use sum()."
  },
  "zh": {
   "question": "只对字典的值求和。输出 sales={'Mon':120,'Tue':80,'Wed':100} 的 values() 之和。",
   "hint": "用 values() 取出值后使用 sum()。"
  }
 },
 "collections__QCOL014": {
  "en": {
   "question": "Find the intersection. Print the intersection of a={1,2,3,4} and b={3,4,5}.",
   "hint": "Use the & operator or a.intersection(b)."
  },
  "zh": {
   "question": "求交集。输出 a={1,2,3,4} 和 b={3,4,5} 的交集。",
   "hint": "使用 & 运算符或 a.intersection(b)。"
  }
 },
 "collections__QCOL015": {
  "en": {
   "question": "Find the difference. From a={1,2,3,4} and b={3,4,5}, print the elements only in a.",
   "hint": "Use the - operator or a.difference(b)."
  },
  "zh": {
   "question": "求差集。从 a={1,2,3,4} 和 b={3,4,5} 中输出只在 a 中的元素。",
   "hint": "使用 - 运算符或 a.difference(b)。"
  }
 },
 "collections__QCOL016": {
  "en": {
   "question": "Practice list comprehension. Make a list of the squares of 1 to 5 and print it.",
   "hint": "The form is [expression for variable in iterable]."
  },
  "zh": {
   "question": "练习列表推导式。生成包含 1 到 5 各数平方的列表并输出。",
   "hint": "形式为 [表达式 for 变量 in 可迭代对象]。"
  }
 },
 "collections__QCOL017": {
  "en": {
   "question": "A comprehension with a condition. Make a list of only the even numbers from 1 to 10 with a comprehension and print it.",
   "hint": "You can filter with the form [x for x in range if condition]."
  },
  "zh": {
   "question": "带条件的推导式。用推导式生成只包含 1~10 中偶数的列表并输出。",
   "hint": "可以用 [x for x in 范围 if 条件] 的形式过滤。"
  }
 },
 "collections__QCOL018": {
  "en": {
   "question": "Dictionary comprehension. Make a {name: number of letters} dictionary from names=['Kim','Lee','Park'] and print it.",
   "hint": "The form is {key_expr: value_expr for variable in iterable}."
  },
  "zh": {
   "question": "字典推导式。用 names=['Kim','Lee','Park'] 生成 {名字: 字母数} 字典并输出。",
   "hint": "形式为 {键表达式: 值表达式 for 变量 in 可迭代对象}。"
  }
 },
 "collections__QCOL019": {
  "en": {
   "question": "The list-copy trap. After running a=[1,2,3]; b=a; b.append(4), print a.",
   "hint": "b=a is not a copy; both point to the same list. To copy, use a.copy()."
  },
  "zh": {
   "question": "列表复制的陷阱。执行 a=[1,2,3]; b=a; b.append(4) 后输出 a。",
   "hint": "b=a 不是复制，而是指向同一个列表。要复制请使用 a.copy()。"
  }
 },
 "collections__QCOL020": {
  "en": {
   "question": "Work with nested lists. From matrix=[[1,2,3],[4,5,6]], print the third value of the second row.",
   "hint": "Access with matrix[row][column]. Indexes start at 0."
  },
  "zh": {
   "question": "处理嵌套列表。从 matrix=[[1,2,3],[4,5,6]] 中输出第二行的第三个值。",
   "hint": "用 matrix[行][列] 访问，索引从 0 开始。"
  }
 },
 "conditionals__QCON001": {
  "en": {
   "question": "Practice the if statement. With score=85, print '합격' (pass) if score is 60 or more.",
   "hint": "The line after 'if condition:' must be indented (4 spaces)."
  },
  "zh": {
   "question": "练习 if 语句。当 score=85 时，如果 score 大于等于 60，就输出 '합격'（合格）。",
   "hint": "if 条件: 的下一行需要缩进（4 个空格）。"
  }
 },
 "conditionals__QCON002": {
  "en": {
   "question": "Practice if-else. With age=17, print '성인' (adult) if age is 19 or more, otherwise '미성년' (minor).",
   "hint": "else: runs when the if condition is False."
  },
  "zh": {
   "question": "练习 if-else。当 age=17 时，19 岁及以上输出 '성인'（成年），否则输出 '미성년'（未成年）。",
   "hint": "else: 在 if 条件为假时执行。"
  }
 },
 "conditionals__QCON003": {
  "en": {
   "question": "Check even/odd. With n=14, print '짝수' (even) if it is even, or '홀수' (odd) if it is odd.",
   "hint": "If n % 2 == 0, the number is even."
  },
  "zh": {
   "question": "判断奇偶。当 n=14 时，偶数输出 '짝수'（偶数），奇数输出 '홀수'（奇数）。",
   "hint": "n % 2 == 0 时为偶数。"
  }
 },
 "conditionals__QCON004": {
  "en": {
   "question": "Use elif. With temp=25, print '더움' (hot) if 30 or more, '따뜻함' (warm) if 20 or more, otherwise '추움' (cold).",
   "hint": "Conditions are checked from the top, and only the first True block runs."
  },
  "zh": {
   "question": "使用 elif。当 temp=25 时，30 及以上输出 '더움'（热），20 及以上输出 '따뜻함'（温暖），其余输出 '추움'（冷）。",
   "hint": "从上到下依次检查，只执行第一个为真的代码块。"
  }
 },
 "conditionals__QCON005": {
  "en": {
   "question": "Distinguish positive/negative/zero. With n=-3, print the right one of '양수' (positive), '음수' (negative), '0'.",
   "hint": "Split into three branches with if / elif / else."
  },
  "zh": {
   "question": "区分正数/负数/0。当 n=-3 时，从 '양수'（正数）、'음수'（负数）、'0' 中输出正确的一个。",
   "hint": "用 if / elif / else 分成三个分支。"
  }
 },
 "conditionals__QCON006": {
  "en": {
   "question": "Use an and condition. With age=22 and has_id=True, print '입장 가능' (entry allowed) if both are satisfied (age>=19 and has_id).",
   "hint": "and is True only when both conditions are True."
  },
  "zh": {
   "question": "使用 and 条件。当 age=22、has_id=True 时，如果两者都满足（age>=19 and has_id），输出 '입장 가능'（可以入场）。",
   "hint": "and 只有在两个条件都为 True 时才为 True。"
  }
 },
 "conditionals__QCON007": {
  "en": {
   "question": "Use in for a condition. With day='토' (Sat), print '주말' (weekend) if day is in ['토','일'], otherwise '평일' (weekday).",
   "hint": "Check membership with 'value in list'."
  },
  "zh": {
   "question": "用 in 设置条件。当 day='토'（周六）时，如果 day 在 ['토','일'] 中，输出 '주말'（周末），否则输出 '평일'（工作日）。",
   "hint": "用 值 in 列表 检查是否包含。"
  }
 },
 "conditionals__QCON008": {
  "en": {
   "question": "An empty list is False. With items=[], check it with 'if items:' and print '비어 있음' (empty) if it is empty.",
   "hint": "An empty list, empty string and 0 are treated as False in conditions."
  },
  "zh": {
   "question": "空列表为 False。当 items=[] 时，用 if items: 检查，若为空则输出 '비어 있음'（为空）。",
   "hint": "空列表、空字符串和 0 在条件中都被视为 False。"
  }
 },
 "conditionals__QCON009": {
  "en": {
   "question": "Compute a letter grade. With score=78, print A for 90+, B for 80+, C for 70+, D for 60+, otherwise F.",
   "hint": "Check from the highest threshold downward with elif."
  },
  "zh": {
   "question": "计算等级。当 score=78 时，90 以上输出 A，80 以上 B，70 以上 C，60 以上 D，其余 F。",
   "hint": "从最高标准开始，用 elif 依次向下检查。"
  }
 },
 "conditionals__QCON010": {
  "en": {
   "question": "Use a conditional expression (ternary operator). With n=7, compute result = '홀' if n%2 else '짝' and print it ('홀' = odd, '짝' = even).",
   "hint": "value1 if condition else value2 is a one-line if-else."
  },
  "zh": {
   "question": "使用条件表达式（三元运算符）。当 n=7 时，按 result = '홀' if n%2 else '짝' 的形式计算并输出（'홀' 为奇，'짝' 为偶）。",
   "hint": "值1 if 条件 else 值2 是一行的 if-else。"
  }
 },
 "conditionals__QCON011": {
  "en": {
   "question": "Use chained comparison. With x=15, print '10대' (teens) if 10 <= x < 20.",
   "hint": "Python lets you chain comparisons like a < x < b."
  },
  "zh": {
   "question": "使用连续比较。当 x=15 时，如果 10 <= x < 20，输出 '10대'（十几岁）。",
   "hint": "Python 可以像 a < x < b 这样连续比较。"
  }
 },
 "conditionals__QCON012": {
  "en": {
   "question": "Practice nested if. With is_member=True and amount=60000, print '무료배송' (free shipping) for a member spending 50000 or more, '할인배송' (discounted shipping) for a member spending less, and '일반배송' (standard shipping) for a non-member.",
   "hint": "You can put an if inside an if block. Indent one more level."
  },
  "zh": {
   "question": "练习嵌套 if。当 is_member=True、amount=60000 时：会员且金额 ≥ 50000 输出 '무료배송'（免运费），会员但金额不足输出 '할인배송'（优惠运费），非会员输出 '일반배송'（普通运费）。",
   "hint": "if 代码块中可以再放 if，需要再缩进一级。"
  }
 },
 "conditionals__QCON013": {
  "en": {
   "question": "Use an or condition. With weather='비' (rain), print '우산 챙기기' (take an umbrella) if it is '비' or '눈' (snow), otherwise '맑음' (clear).",
   "hint": "or is True if at least one side is True."
  },
  "zh": {
   "question": "使用 or 条件。当 weather='비'（雨）时，如果是 '비' 或 '눈'（雪），输出 '우산 챙기기'（带伞），否则输出 '맑음'（晴）。",
   "hint": "or 只要有一个为 True 就为 True。"
  }
 },
 "conditionals__QCON014": {
  "en": {
   "question": "Use not. With logged_in=False, print '로그인 필요' (login required) if not logged_in.",
   "hint": "not flips True/False."
  },
  "zh": {
   "question": "使用 not。当 logged_in=False 时，如果 not logged_in，输出 '로그인 필요'（需要登录）。",
   "hint": "not 会把 True/False 反转。"
  }
 },
 "conditionals__QCON015": {
  "en": {
   "question": "Check for a leap year. With year=2024, print '윤년' (leap year) if (divisible by 4 and not by 100) or divisible by 400, otherwise '평년' (common year).",
   "hint": "Use the condition (y%4==0 and y%100!=0) or y%400==0."
  },
  "zh": {
   "question": "判断闰年。当 year=2024 时，若（能被 4 整除且不能被 100 整除）或能被 400 整除，输出 '윤년'（闰年），否则输出 '평년'（平年）。",
   "hint": "使用条件 (y%4==0 and y%100!=0) or y%400==0。"
  }
 },
 "conditionals__QCON016": {
  "en": {
   "question": "Find the maximum with conditionals. Among a=12, b=27, c=9, find the largest value using only if statements and print it.",
   "hint": "Start with m=a, compare with b and c in turn, and replace it when a bigger one appears."
  },
  "zh": {
   "question": "用条件语句求最大值。在 a=12、b=27、c=9 中，只用 if 语句求出最大值并输出。",
   "hint": "先设 m=a，再依次与 b、c 比较，更大就替换。"
  }
 },
 "conditionals__QCON017": {
  "en": {
   "question": "Use the match-case statement (Python 3.10+). With cmd='stop', print '시작' (start) for 'start', '정지' (stop) for 'stop', and '알 수 없음' (unknown) otherwise.",
   "hint": "case _: is the default branch that matches any value."
  },
  "zh": {
   "question": "使用 match-case 语句（Python 3.10+）。当 cmd='stop' 时，'start' 输出 '시작'（开始），'stop' 输出 '정지'（停止），其他输出 '알 수 없음'（未知）。",
   "hint": "case _: 是匹配任何值的默认分支。"
  }
 },
 "conditionals__QCON018": {
  "en": {
   "question": "Classify BMI. With weight=70 (kg) and height=1.75 (m), compute bmi=weight/height**2 and print '저체중' (underweight) if under 18.5, '정상' (normal) if under 23, '과체중' (overweight) if under 25, otherwise '비만' (obese).",
   "hint": "bmi is about 22.86. Check from the smallest threshold with elif."
  },
  "zh": {
   "question": "判定 BMI。当 weight=70（kg）、height=1.75（m）时，计算 bmi=weight/height**2：小于 18.5 输出 '저체중'（偏瘦），小于 23 输出 '정상'（正常），小于 25 输出 '과체중'（超重），其余输出 '비만'（肥胖）。",
   "hint": "bmi 约为 22.86。从最小的标准开始用 elif 检查。"
  }
 },
 "conditionals__QCON019": {
  "en": {
   "question": "Understand short-circuit evaluation. With x=0, print the result of x != 0 and 10/x > 1. (No division-by-zero error occurs.)",
   "hint": "and does not evaluate the right side if the left side is False."
  },
  "zh": {
   "question": "理解短路求值。当 x=0 时，输出 x != 0 and 10/x > 1 的结果。（不会出现除以零错误）",
   "hint": "and 在左边为 False 时不会计算右边。"
  }
 },
 "conditionals__QCON020": {
  "en": {
   "question": "Calculate a discounted fare. With age=67 and price=10000, apply 50% off for age 65+, 30% off for age 13 or under, no discount otherwise, and print the final amount as an integer.",
   "hint": "Decide the discount rate with conditionals, then compute int(price * (1 - rate))."
  },
  "zh": {
   "question": "计算折扣票价。当 age=67、price=10000 时，65 岁以上打五折（50%），13 岁及以下打七折（30%），其余不打折，以整数输出最终金额。",
   "hint": "先用条件语句确定折扣率，再计算 int(price * (1 - 折扣率))。"
  }
 },
 "data_loading__QDAT001": {
  "en": {
   "question": "Basic practice reading a CSV file. Read df with pd.read_csv('data.csv'), then print the string 'OK' on the last line.",
   "example": "Try running: df = pd.read_csv('data.csv'); print('OK')",
   "hint": "If the file was read correctly, make sure only OK is printed on the last line."
  },
  "zh": {
   "question": "读取 CSV 文件的基础练习。用 pd.read_csv('data.csv') 读取 df，然后在最后一行输出字符串 'OK'。",
   "example": "试着运行：df = pd.read_csv('data.csv'); print('OK')",
   "hint": "如果文件读取成功，确保最后一行只输出 OK。"
  }
 },
 "data_loading__QDAT002": {
  "en": {
   "question": "Read an Excel file. Read the data with pd.read_excel('sample.xlsx') and print 'DONE' on the last line.",
   "example": "Try running: df = pd.read_excel('sample.xlsx'); print('DONE')",
   "hint": "Confirm with a simple message that the Excel file was read."
  },
  "zh": {
   "question": "读取 Excel 文件。用 pd.read_excel('sample.xlsx') 读取数据，并在最后一行输出 'DONE'。",
   "example": "试着运行：df = pd.read_excel('sample.xlsx'); print('DONE')",
   "hint": "用简单的信息确认 Excel 文件已成功读取。"
  }
 },
 "data_loading__QDAT003": {
  "en": {
   "question": "Read a CSV without a header. Read it with the header=None option and print 'NO_HEADER' on the last line.",
   "example": "Try running: df = pd.read_csv('raw.csv', header=None); print('NO_HEADER')",
   "hint": "With header=None, the first row is read as data too."
  },
  "zh": {
   "question": "读取没有表头的 CSV。使用 header=None 选项读取，并在最后一行输出 'NO_HEADER'。",
   "example": "试着运行：df = pd.read_csv('raw.csv', header=None); print('NO_HEADER')",
   "hint": "使用 header=None 时，第一行也作为数据读取。"
  }
 },
 "data_loading__QDAT004": {
  "en": {
   "question": "Read a semicolon-separated CSV. Read it with the sep=';' option, then print 'SEMICOLON' on the last line.",
   "example": "Try running: df = pd.read_csv('semi.csv', sep=';'); print('SEMICOLON')",
   "hint": "You can change the delimiter with the sep argument."
  },
  "zh": {
   "question": "读取以分号分隔的 CSV。使用 sep=';' 选项读取后，在最后一行输出 'SEMICOLON'。",
   "example": "试着运行：df = pd.read_csv('semi.csv', sep=';'); print('SEMICOLON')",
   "hint": "可以用 sep 参数更改分隔符。"
  }
 },
 "data_loading__QDAT005": {
  "en": {
   "question": "Read a CSV with UTF-8 encoding. Read it with encoding='utf-8', then print 'UTF8' on the last line.",
   "example": "Try running: df = pd.read_csv('utf8.csv', encoding='utf-8'); print('UTF8')",
   "hint": "Specifying the encoding prevents broken (garbled) characters."
  },
  "zh": {
   "question": "指定 UTF-8 编码读取 CSV。使用 encoding='utf-8' 读取后，在最后一行输出 'UTF8'。",
   "example": "试着运行：df = pd.read_csv('utf8.csv', encoding='utf-8'); print('UTF8')",
   "hint": "明确指定编码可以防止乱码。"
  }
 },
 "data_loading__QDAT006": {
  "en": {
   "question": "Read only specific columns. Read the file with usecols=['A','C'], then print 'COLUMNS' on the last line.",
   "example": "Try running: df = pd.read_csv('cols.csv', usecols=['A','C']); print('COLUMNS')",
   "hint": "usecols loads only the columns you need into memory."
  },
  "zh": {
   "question": "只读取特定列。用 usecols=['A','C'] 选项读取文件后，在最后一行输出 'COLUMNS'。",
   "example": "试着运行：df = pd.read_csv('cols.csv', usecols=['A','C']); print('COLUMNS')",
   "hint": "usecols 只把需要的列读入内存。"
  }
 },
 "data_loading__QDAT007": {
  "en": {
   "question": "Preview only the top rows. Read part of the file with nrows=10, then print 'HEAD10' on the last line.",
   "example": "Try running: df = pd.read_csv('big.csv', nrows=10); print('HEAD10')",
   "hint": "nrows is used to read only the first few rows."
  },
  "zh": {
   "question": "只预览前几行。用 nrows=10 选项读取文件的一部分后，在最后一行输出 'HEAD10'。",
   "example": "试着运行：df = pd.read_csv('big.csv', nrows=10); print('HEAD10')",
   "hint": "nrows 用于只读取开头的几行。"
  }
 },
 "data_loading__QDAT008": {
  "en": {
   "question": "Read a large file in chunks. Create a reader with chunksize=1000, take the first chunk with next, and print 'CHUNK' on the last line.",
   "example": "Try running: reader = pd.read_csv('large.csv', chunksize=1000); chunk = next(reader); print('CHUNK')",
   "hint": "Processing in chunks reduces the memory load."
  },
  "zh": {
   "question": "分块读取大文件。用 chunksize=1000 创建 reader，用 next 取出第一块，然后在最后一行输出 'CHUNK'。",
   "example": "试着运行：reader = pd.read_csv('large.csv', chunksize=1000); chunk = next(reader); print('CHUNK')",
   "hint": "分块处理可以减轻内存负担。"
  }
 },
 "data_loading__QDAT009": {
  "en": {
   "question": "Read a JSON file into a DataFrame. Read it with pd.read_json('data.json'), then print 'JSON' on the last line.",
   "example": "Try running: df = pd.read_json('data.json'); print('JSON')",
   "hint": "Structured JSON can be converted directly into a table."
  },
  "zh": {
   "question": "将 JSON 文件读取为 DataFrame。用 pd.read_json('data.json') 读取后，在最后一行输出 'JSON'。",
   "example": "试着运行：df = pd.read_json('data.json'); print('JSON')",
   "hint": "结构化的 JSON 可以直接转换为表格。"
  }
 },
 "data_loading__QDAT010": {
  "en": {
   "question": "Read a TSV file. Read the tab-separated file with read_csv(..., sep='\\t') and print 'TSV' on the last line.",
   "example": "Try running: df = pd.read_csv('data.tsv', sep='\\t'); print('TSV')",
   "hint": "The tab character is written as '\\t'."
  },
  "zh": {
   "question": "读取 TSV 文件。用 read_csv(..., sep='\\t') 读取制表符分隔的文件，并在最后一行输出 'TSV'。",
   "example": "试着运行：df = pd.read_csv('data.tsv', sep='\\t'); print('TSV')",
   "hint": "制表符写作 '\\t'。"
  }
 },
 "data_loading__QDAT011": {
  "en": {
   "question": "Read with an index column. Read it with the index_col=0 option and print 'INDEX' on the last line.",
   "example": "Try running: df = pd.read_csv('with_index.csv', index_col=0); print('INDEX')",
   "hint": "The first column of the file is used as the index."
  },
  "zh": {
   "question": "指定索引列读取。使用 index_col=0 选项读取，并在最后一行输出 'INDEX'。",
   "example": "试着运行：df = pd.read_csv('with_index.csv', index_col=0); print('INDEX')",
   "hint": "文件的第一列将被用作索引。"
  }
 },
 "data_loading__QDAT012": {
  "en": {
   "question": "Remove unnecessary spaces. Read the file with skipinitialspace=True, then print 'SPACE' on the last line.",
   "example": "Try running: df = pd.read_csv('space.csv', skipinitialspace=True); print('SPACE')",
   "hint": "Spaces after the delimiter are removed automatically."
  },
  "zh": {
   "question": "去除多余的空格。用 skipinitialspace=True 选项读取文件后，在最后一行输出 'SPACE'。",
   "example": "试着运行：df = pd.read_csv('space.csv', skipinitialspace=True); print('SPACE')",
   "hint": "会自动去除分隔符后面的空格。"
  }
 },
 "data_loading__QDAT013": {
  "en": {
   "question": "Treat invalid values as NaN. Read the file with na_values=['NA','-'], then print 'NA' on the last line.",
   "example": "Try running: df = pd.read_csv('na.csv', na_values=['NA','-']); print('NA')",
   "hint": "The specified values are treated as missing."
  },
  "zh": {
   "question": "将无效值处理为 NaN。用 na_values=['NA','-'] 选项读取文件后，在最后一行输出 'NA'。",
   "example": "试着运行：df = pd.read_csv('na.csv', na_values=['NA','-']); print('NA')",
   "hint": "指定的值会被当作缺失值处理。"
  }
 },
 "data_loading__QDAT014": {
  "en": {
   "question": "Practice parsing dates. Read the file with parse_dates=['date'], then print 'DATE' on the last line.",
   "example": "Try running: df = pd.read_csv('date.csv', parse_dates=['date']); print('DATE')",
   "hint": "The date column is automatically converted to datetime."
  },
  "zh": {
   "question": "练习日期解析。用 parse_dates=['date'] 选项读取文件后，在最后一行输出 'DATE'。",
   "example": "试着运行：df = pd.read_csv('date.csv', parse_dates=['date']); print('DATE')",
   "hint": "日期列会被自动转换为 datetime 类型。"
  }
 },
 "data_loading__QDAT015": {
  "en": {
   "question": "Read while ignoring encoding errors. Read the file with the errors='ignore' option, then print 'IGNORE' on the last line.",
   "example": "Try running: df = pd.read_csv('error.csv', encoding='utf-8', errors='ignore'); print('IGNORE')",
   "hint": "Characters that cause errors are skipped while reading."
  },
  "zh": {
   "question": "忽略编码错误读取。用 errors='ignore' 选项读取文件后，在最后一行输出 'IGNORE'。",
   "example": "试着运行：df = pd.read_csv('error.csv', encoding='utf-8', errors='ignore'); print('IGNORE')",
   "hint": "读取时会跳过出错的字符。"
  }
 },
 "data_loading__QDAT016": {
  "en": {
   "question": "Skip a header row. Skip the first row with skiprows=1, then print 'SKIP' on the last line.",
   "example": "Try running: df = pd.read_csv('skip.csv', skiprows=1); print('SKIP')",
   "hint": "Used to ignore description lines at the top of a file."
  },
  "zh": {
   "question": "跳过表头行。用 skiprows=1 跳过第一行读取后，在最后一行输出 'SKIP'。",
   "example": "试着运行：df = pd.read_csv('skip.csv', skiprows=1); print('SKIP')",
   "hint": "用于忽略文件顶部的说明行。"
  }
 },
 "data_loading__QDAT017": {
  "en": {
   "question": "Read a compressed CSV. Read the file with the compression='gzip' option, then print 'GZIP' on the last line.",
   "example": "Try running: df = pd.read_csv('data.csv.gz', compression='gzip'); print('GZIP')",
   "hint": "Compressed files can be read directly as well."
  },
  "zh": {
   "question": "读取压缩的 CSV。使用 compression='gzip' 选项读取文件后，在最后一行输出 'GZIP'。",
   "example": "试着运行：df = pd.read_csv('data.csv.gz', compression='gzip'); print('GZIP')",
   "hint": "压缩文件也可以直接读取。"
  }
 },
 "data_loading__QDAT018": {
  "en": {
   "question": "When the delimiter is complex, read with engine='python' and print 'PY' on the last line.",
   "example": "Try running: df = pd.read_csv('complex.csv', sep='|', engine='python'); print('PY')",
   "hint": "The Python engine is useful for complex delimiter patterns."
  },
  "zh": {
   "question": "当分隔符较复杂时，指定 engine='python' 读取，并在最后一行输出 'PY'。",
   "example": "试着运行：df = pd.read_csv('complex.csv', sep='|', engine='python'); print('PY')",
   "hint": "Python 引擎适合处理复杂模式的分隔符。"
  }
 },
 "data_loading__QDAT019": {
  "en": {
   "question": "After reading the file successfully, call df.head(), then print 'HEAD' on the last line.",
   "example": "Try running: df = pd.read_csv('any.csv'); df.head(); print('HEAD')",
   "hint": "Even after previewing, make sure only HEAD remains on the last line."
  },
  "zh": {
   "question": "成功读取文件后调用 df.head()，然后在最后一行输出 'HEAD'。",
   "example": "试着运行：df = pd.read_csv('any.csv'); df.head(); print('HEAD')",
   "hint": "预览之后，也要确保最后一行只输出 HEAD。"
  }
 },
 "datatypes__QDAT001": {
  "en": {
   "question": "Practice integer arithmetic. Store 7 in variable a and 3 in b, then print the result of a+b.",
   "example": "Set a = 7; b = 3, then check the sum with print(a+b).",
   "hint": "Integer addition uses the + operator. Use print so that only the result appears on one line."
  },
  "zh": {
   "question": "练习整数运算。将 7 存入变量 a，将 3 存入 b，然后输出 a+b 的结果。",
   "example": "设 a = 7; b = 3，然后用 print(a+b) 查看总和。",
   "hint": "整数加法使用 + 运算符，用 print 在一行中只输出结果。"
  }
 },
 "datatypes__QDAT002": {
  "en": {
   "question": "Practice integer arithmetic. Store 10 in variable a and 4 in b, then print the result of a+b.",
   "example": "Set a = 10; b = 4, then check the sum with print(a+b).",
   "hint": "Integer addition uses the + operator. Use print so that only the result appears on one line."
  },
  "zh": {
   "question": "练习整数运算。将 10 存入变量 a，将 4 存入 b，然后输出 a+b 的结果。",
   "example": "设 a = 10; b = 4，然后用 print(a+b) 查看总和。",
   "hint": "整数加法使用 + 运算符，用 print 在一行中只输出结果。"
  }
 },
 "datatypes__QDAT003": {
  "en": {
   "question": "Practice integer arithmetic. Store 15 in variable a and 6 in b, then print the result of a+b.",
   "example": "Set a = 15; b = 6, then check the sum with print(a+b).",
   "hint": "Integer addition uses the + operator. Use print so that only the result appears on one line."
  },
  "zh": {
   "question": "练习整数运算。将 15 存入变量 a，将 6 存入 b，然后输出 a+b 的结果。",
   "example": "设 a = 15; b = 6，然后用 print(a+b) 查看总和。",
   "hint": "整数加法使用 + 运算符，用 print 在一行中只输出结果。"
  }
 },
 "datatypes__QDAT004": {
  "en": {
   "question": "Practice integer arithmetic. Store 9 in variable a and 2 in b, then print the result of a+b.",
   "example": "Set a = 9; b = 2, then check the sum with print(a+b).",
   "hint": "Integer addition uses the + operator. Use print so that only the result appears on one line."
  },
  "zh": {
   "question": "练习整数运算。将 9 存入变量 a，将 2 存入 b，然后输出 a+b 的结果。",
   "example": "设 a = 9; b = 2，然后用 print(a+b) 查看总和。",
   "hint": "整数加法使用 + 运算符，用 print 在一行中只输出结果。"
  }
 },
 "datatypes__QDAT005": {
  "en": {
   "question": "Practice integer arithmetic. Store 11 in variable a and 5 in b, then print the result of a+b.",
   "example": "Set a = 11; b = 5, then check the sum with print(a+b).",
   "hint": "Integer addition uses the + operator. Use print so that only the result appears on one line."
  },
  "zh": {
   "question": "练习整数运算。将 11 存入变量 a，将 5 存入 b，然后输出 a+b 的结果。",
   "example": "设 a = 11; b = 5，然后用 print(a+b) 查看总和。",
   "hint": "整数加法使用 + 运算符，用 print 在一行中只输出结果。"
  }
 },
 "datatypes__QDAT006": {
  "en": {
   "question": "Find the length of a string. Store 'Python' in s and print the result of len(s).",
   "example": "Set s = 'Python' and print len(s).",
   "hint": "len(string) returns the number of characters."
  },
  "zh": {
   "question": "求字符串长度。将 'Python' 存入 s，并输出 len(s) 的结果。",
   "example": "设 s = 'Python'，然后输出 len(s)。",
   "hint": "len(字符串) 返回字符个数。"
  }
 },
 "datatypes__QDAT007": {
  "en": {
   "question": "Find the length of a string including spaces. Store 'AI Python' in s and print its length.",
   "example": "Store s = 'AI Python', then print len(s).",
   "hint": "A space also counts as one character."
  },
  "zh": {
   "question": "求包含空格的字符串长度。将 'AI Python' 存入 s 并输出其长度。",
   "example": "存入 s = 'AI Python' 后输出 len(s)。",
   "hint": "空格也算作一个字符。"
  }
 },
 "datatypes__QDAT008": {
  "en": {
   "question": "Practice string indexing. Print the first character of s='datascience'.",
   "example": "Use s[0] to get the first character.",
   "hint": "Indexes start at 0."
  },
  "zh": {
   "question": "练习字符串索引。输出 s='datascience' 的第一个字符。",
   "example": "用 s[0] 取出第一个字符。",
   "hint": "索引从 0 开始。"
  }
 },
 "datatypes__QDAT009": {
  "en": {
   "question": "Practice string slicing. From s='python', print only the first three characters.",
   "example": "Create the substring with s[:3] and print it.",
   "hint": "s[:n] takes characters from index 0 to n-1."
  },
  "zh": {
   "question": "练习字符串切片。从 s='python' 中截取前三个字符并输出。",
   "example": "用 s[:3] 生成子字符串并输出。",
   "hint": "s[:n] 截取从 0 到 n-1 的字符。"
  }
 },
 "datatypes__QDAT010": {
  "en": {
   "question": "Practice list indexing. Print the second element of numbers=[10,20,30].",
   "example": "Set numbers = [10,20,30] and print numbers[1].",
   "hint": "List indexes start at 0, so the second value is at index 1."
  },
  "zh": {
   "question": "练习列表索引。输出 numbers=[10,20,30] 的第二个元素。",
   "example": "设 numbers = [10,20,30]，然后输出 numbers[1]。",
   "hint": "列表索引从 0 开始，所以第二个值的索引是 1。"
  }
 },
 "datatypes__QDAT011": {
  "en": {
   "question": "Find the length of a list. Use len to get the length of items=[1,3,5,7,9] and print it.",
   "example": "Try items = [1,3,5,7,9]; print(len(items)).",
   "hint": "len(list) returns the number of elements."
  },
  "zh": {
   "question": "求列表长度。用 len 求 items=[1,3,5,7,9] 的长度并输出。",
   "example": "试试 items = [1,3,5,7,9]; print(len(items))。",
   "hint": "len(列表) 返回元素个数。"
  }
 },
 "datatypes__QDAT012": {
  "en": {
   "question": "Get a value from a tuple. Print the last value of t=(100,200,300).",
   "example": "Try t = (100,200,300) and print t[-1].",
   "hint": "The negative index -1 refers to the last element."
  },
  "zh": {
   "question": "从元组中取值。输出 t=(100,200,300) 的最后一个值。",
   "example": "试试 t = (100,200,300)，然后输出 t[-1]。",
   "hint": "负索引 -1 指向最后一个元素。"
  }
 },
 "datatypes__QDAT013": {
  "en": {
   "question": "Practice tuple unpacking. Unpack t=(1,2,3) into a, b, c and print c.",
   "example": "Unpack with a,b,c = (1,2,3), then run print(c).",
   "hint": "The number of variables on the left must equal the tuple length."
  },
  "zh": {
   "question": "练习元组解包。将 t=(1,2,3) 解包到 a、b、c，然后输出 c。",
   "example": "用 a,b,c = (1,2,3) 解包后运行 print(c)。",
   "hint": "左边变量的个数必须与元组长度相同。"
  }
 },
 "datatypes__QDAT014": {
  "en": {
   "question": "Look up a value in a dictionary. Print the age from user={'name':'Kim','age':25}.",
   "example": "Try running: user = {'name':'Kim','age':25}; print(user['age'])",
   "hint": "Access a dictionary value by putting the key inside square brackets."
  },
  "zh": {
   "question": "在字典中查询值。输出 user={'name':'Kim','age':25} 中的年龄。",
   "example": "试着运行：user = {'name':'Kim','age':25}; print(user['age'])",
   "hint": "访问字典的值时，在方括号中写入键。"
  }
 },
 "datatypes__QDAT015": {
  "en": {
   "question": "Check the list of keys in a dictionary. Print the keys of d={'a':1,'b':2}.",
   "example": "Try running: d = {'a':1,'b':2}; print(list(d.keys()))",
   "hint": "dict.keys() returns a keys view; wrap it with list to get a list."
  },
  "zh": {
   "question": "查看字典的键列表。输出 d={'a':1,'b':2} 的键列表。",
   "example": "试着运行：d = {'a':1,'b':2}; print(list(d.keys()))",
   "hint": "dict.keys() 返回键视图对象，用 list 包裹即可得到列表。"
  }
 },
 "datatypes__QDAT016": {
  "en": {
   "question": "Find the length of a set. Make a set from {1,2,2,3,3,3} and print its length.",
   "example": "Try running: s = set([1,2,2,3,3,3]); print(len(s))",
   "hint": "A set keeps only unique values (duplicates are removed)."
  },
  "zh": {
   "question": "求集合的长度。由 {1,2,2,3,3,3} 创建集合并输出其长度。",
   "example": "试着运行：s = set([1,2,2,3,3,3]); print(len(s))",
   "hint": "集合中只保留去重后的值。"
  }
 },
 "datatypes__QDAT017": {
  "en": {
   "question": "Practice set operations. With a={1,2,3} and b={3,4}, print their union.",
   "example": "Try running: a = {1,2,3}; b = {3,4}; print(a|b)",
   "hint": "The union of sets can also be computed with the | operator."
  },
  "zh": {
   "question": "练习集合运算。当 a={1,2,3}、b={3,4} 时，输出它们的并集。",
   "example": "试着运行：a = {1,2,3}; b = {3,4}; print(a|b)",
   "hint": "集合的并集也可以用 | 运算符求得。"
  }
 },
 "datatypes__QDAT018": {
  "en": {
   "question": "Check the result of a comparison. Print the result of 5>2.",
   "example": "Run print(5>2) yourself.",
   "hint": "A comparison returns True or False."
  },
  "zh": {
   "question": "查看比较运算的结果。输出 5>2 的结果。",
   "example": "亲自运行 print(5>2)。",
   "hint": "比较运算的结果是 True 或 False。"
  }
 },
 "datatypes__QDAT019": {
  "en": {
   "question": "Check whether a string is empty. With s='', print the result of bool(s).",
   "example": "Try running: s = ''; print(bool(s))",
   "hint": "An empty string evaluates to False."
  },
  "zh": {
   "question": "检查字符串是否为空。当 s='' 时，输出 bool(s) 的结果。",
   "example": "试着运行：s = ''; print(bool(s))",
   "hint": "空字符串的布尔值为 False。"
  }
 },
 "datatypes__QDAT020": {
  "en": {
   "question": "Convert an integer to a float. With n=7, print the result of float(n).",
   "example": "Try running: n = 7; print(float(n))",
   "hint": "float(integer) becomes a real number with a decimal point."
  },
  "zh": {
   "question": "将整数转换为浮点数。当 n=7 时，输出 float(n) 的结果。",
   "example": "试着运行：n = 7; print(float(n))",
   "hint": "float(整数) 会变成带小数点的实数。"
  }
 },
 "exceptions__QEXC001": {
  "en": {
   "question": "Practice try-except. Run 10 / 0 in a try block, and print '0으로 나눌 수 없음' (cannot divide by 0) if a ZeroDivisionError occurs.",
   "hint": "Put code that may fail in try:, and handling code in except ErrorType:."
  },
  "zh": {
   "question": "练习 try-except。在 try 块中执行 10 / 0，若出现 ZeroDivisionError，输出 '0으로 나눌 수 없음'（不能除以 0）。",
   "hint": "把可能出错的代码放在 try: 中，处理代码放在 except 错误类型: 中。"
  }
 },
 "exceptions__QEXC002": {
  "en": {
   "question": "Handle a conversion error. Try int('abc') and print '숫자가 아님' (not a number) if a ValueError occurs.",
   "hint": "Converting a non-numeric string with int() raises ValueError."
  },
  "zh": {
   "question": "处理类型转换错误。尝试 int('abc')，若出现 ValueError，输出 '숫자가 아님'（不是数字）。",
   "hint": "用 int() 转换非数字字符串会引发 ValueError。"
  }
 },
 "exceptions__QEXC003": {
  "en": {
   "question": "Handle an index error. Access nums[5] in nums=[1,2,3] and print '범위 밖' (out of range) if an IndexError occurs.",
   "hint": "An index beyond the list length causes IndexError."
  },
  "zh": {
   "question": "处理索引错误。在 nums=[1,2,3] 中访问 nums[5]，若出现 IndexError，输出 '범위 밖'（超出范围）。",
   "hint": "超出列表长度的索引会引发 IndexError。"
  }
 },
 "exceptions__QEXC004": {
  "en": {
   "question": "Handle a key error. Access d['b'] in d={'a':1} and print '키 없음' (no key) if a KeyError occurs.",
   "hint": "Looking up a missing key with [] causes KeyError."
  },
  "zh": {
   "question": "处理键错误。在 d={'a':1} 中访问 d['b']，若出现 KeyError，输出 '키 없음'（没有该键）。",
   "hint": "用 [] 查询字典中不存在的键会引发 KeyError。"
  }
 },
 "exceptions__QEXC005": {
  "en": {
   "question": "If there is no error, except does not run. Run print(10 / 2) inside try, and write except ZeroDivisionError to print '오류' (error).",
   "hint": "Without an error, only the try block runs and except is skipped."
  },
  "zh": {
   "question": "没有错误时 except 不会执行。在 try 中执行 print(10 / 2)，并在 except ZeroDivisionError 中输出 '오류'（错误）。",
   "hint": "没有错误时只执行 try 块，跳过 except。"
  }
 },
 "exceptions__QEXC006": {
  "en": {
   "question": "Handle a type error. Run '나이: ' + 25 and print 'TypeError 발생' (TypeError occurred) if a TypeError occurs.",
   "hint": "A string and an integer cannot be joined directly with +, so a TypeError occurs."
  },
  "zh": {
   "question": "处理类型错误。执行 '나이: ' + 25，若出现 TypeError，输出 'TypeError 발생'（发生 TypeError）。",
   "hint": "字符串和整数不能直接用 + 连接，会引发 TypeError。"
  }
 },
 "exceptions__QEXC007": {
  "en": {
   "question": "Use finally. Write code that does print('시도') (try) in try and print('항상 실행') (always runs) in finally.",
   "hint": "The finally block always runs, whether or not there is an error."
  },
  "zh": {
   "question": "使用 finally。在 try 中 print('시도')（尝试），在 finally 中 print('항상 실행')（总是执行）。",
   "hint": "无论是否出错，finally 块总会执行。"
  }
 },
 "exceptions__QEXC008": {
  "en": {
   "question": "Catch all exceptions. Try int('3.5'), catch it with except Exception:, and print '처리됨' (handled).",
   "hint": "Exception is the parent exception class that catches most errors."
  },
  "zh": {
   "question": "捕获所有异常。尝试 int('3.5')，用 except Exception: 捕获并输出 '처리됨'（已处理）。",
   "hint": "Exception 是能捕获大多数错误的上级异常类。"
  }
 },
 "exceptions__QEXC009": {
  "en": {
   "question": "Check the error message. Run 10 / 0, catch it with except ZeroDivisionError as e:, and print e.",
   "hint": "Receiving the exception object with 'as e' lets you see the error message."
  },
  "zh": {
   "question": "查看错误信息。执行 10 / 0，用 except ZeroDivisionError as e: 捕获后输出 e。",
   "hint": "用 as e 接收异常对象，就能看到错误信息。"
  }
 },
 "exceptions__QEXC010": {
  "en": {
   "question": "Use the else block. Do n=int('42') in try, and if there is no error print n*2 in else. (Print '오류' (error) in except ValueError.)",
   "hint": "else runs only when there is no error in try."
  },
  "zh": {
   "question": "使用 else 块。在 try 中执行 n=int('42')，没有错误时在 else 中输出 n*2。（except ValueError 中输出 '오류'（错误））",
   "hint": "else 只在 try 中没有错误时执行。"
  }
 },
 "exceptions__QEXC011": {
  "en": {
   "question": "Tell exceptions apart. For items=[10, 0], compute 100 / x in a for loop; print '0 제외' (skip 0) on ZeroDivisionError, otherwise print the result.",
   "hint": "Putting try-except inside the loop lets the loop continue even after an error."
  },
  "zh": {
   "question": "区分不同异常。对 items=[10, 0] 用 for 循环计算 100 / x；出现 ZeroDivisionError 时输出 '0 제외'（排除 0），正常时输出结果。",
   "hint": "把 try-except 放在循环内，出错后循环也会继续。"
  }
 },
 "exceptions__QEXC012": {
  "en": {
   "question": "Handle each exception type. For each value v in data=['5','x','0'], print 10 / int(v); print '숫자 아님' (not a number) on ValueError and '0 나눗셈' (division by 0) on ZeroDivisionError.",
   "hint": "With several except blocks, each error type is handled differently."
  },
  "zh": {
   "question": "按异常类型分别处理。对 data=['5','x','0'] 中的每个值 v 输出 10 / int(v)；ValueError 时输出 '숫자 아님'（不是数字），ZeroDivisionError 时输出 '0 나눗셈'（除以 0）。",
   "hint": "设置多个 except 块，可按错误类型分别处理。"
  }
 },
 "exceptions__QEXC013": {
  "en": {
   "question": "Catch several exceptions in one line. Try int(d['a']) with d={'a':'x'}, catch it with except (KeyError, ValueError):, and print '입력 오류' (input error).",
   "hint": "You can group them in a tuple like except (Exception1, Exception2):."
  },
  "zh": {
   "question": "在一行中捕获多个异常。在 d={'a':'x'} 中尝试 int(d['a'])，用 except (KeyError, ValueError): 捕获并输出 '입력 오류'（输入错误）。",
   "hint": "可以像 except (异常1, 异常2): 这样用元组组合。"
  }
 },
 "exceptions__QEXC014": {
  "en": {
   "question": "Raise an exception with raise. With age=-5, if age is negative do raise ValueError('나이는 음수일 수 없음') (age cannot be negative), catch it with except ValueError as e, and print e.",
   "hint": "Raise an error yourself with raise ExceptionClass('message')."
  },
  "zh": {
   "question": "用 raise 引发异常。当 age=-5 且为负数时执行 raise ValueError('나이는 음수일 수 없음')（年龄不能为负），用 except ValueError as e 捕获并输出 e。",
   "hint": "用 raise 异常类('信息') 主动引发错误。"
  }
 },
 "exceptions__QEXC015": {
  "en": {
   "question": "Check the exception class name. Run [1,2][9], catch it with except Exception as e, then print type(e).__name__.",
   "hint": "type(e).__name__ is the class name of the exception that occurred."
  },
  "zh": {
   "question": "查看异常类名。执行 [1,2][9]，用 except Exception as e 捕获后输出 type(e).__name__。",
   "hint": "type(e).__name__ 是所发生异常的类名。"
  }
 },
 "exceptions__QEXC016": {
  "en": {
   "question": "Make a safe division function. Using try-except, make safe_div(a, b) return None if b is 0, otherwise a/b, and run print(safe_div(8, 2), safe_div(1, 0)).",
   "hint": "return None in the except block inside the function."
  },
  "zh": {
   "question": "编写安全除法函数。用 try-except 让 safe_div(a, b) 在 b 为 0 时返回 None，否则返回 a/b，然后执行 print(safe_div(8, 2), safe_div(1, 0))。",
   "hint": "在函数内的 except 块中 return None。"
  }
 },
 "exceptions__QEXC017": {
  "en": {
   "question": "Use try-except-else-finally all together. Try x=int('7') → except ValueError: '오류' (error) / else: '성공' (success) / finally: '끝' (end), so they print in that order.",
   "hint": "Without an error, it runs in the order try → else → finally."
  },
  "zh": {
   "question": "同时使用 try-except-else-finally。尝试 x=int('7') → except ValueError: '오류'（错误）/ else: '성공'（成功）/ finally: '끝'（结束），按此顺序输出。",
   "hint": "没有错误时，按 try → else → finally 的顺序执行。"
  }
 },
 "exceptions__QEXC018": {
  "en": {
   "question": "Make a custom exception. Make an InsufficientBalance class inheriting Exception; when trying to withdraw 2000 from balance=1000, raise InsufficientBalance('잔액 부족') (insufficient balance), catch it, and print e.",
   "hint": "Define a new exception with class Name(Exception): pass."
  },
  "zh": {
   "question": "创建自定义异常。编写继承 Exception 的 InsufficientBalance 类；当从 balance=1000 中取出 2000 时 raise InsufficientBalance('잔액 부족')（余额不足），捕获后输出 e。",
   "hint": "用 class 名称(Exception): pass 定义新异常。"
  }
 },
 "exceptions__QEXC019": {
  "en": {
   "question": "Add only valid values. From raw=['10','20','abc','30',''], add only the values that can be converted to integers and print the sum.",
   "hint": "Skip failed conversions with except ValueError: pass."
  },
  "zh": {
   "question": "只累加有效值。从 raw=['10','20','abc','30',''] 中只把能转成整数的值相加并输出总和。",
   "hint": "转换失败时用 except ValueError: pass 跳过。"
  }
 },
 "exceptions__QEXC020": {
  "en": {
   "question": "Check a condition with assert. With score=120, run assert 0 <= score <= 100, '점수 범위 오류' (score range error), catch the AssertionError, and print e.",
   "hint": "assert condition, message — if the condition is False, an AssertionError occurs."
  },
  "zh": {
   "question": "用 assert 检查条件。当 score=120 时执行 assert 0 <= score <= 100, '점수 범위 오류'（分数范围错误），捕获 AssertionError 后输出 e。",
   "hint": "assert 条件, 信息 — 条件为 False 时会引发 AssertionError。"
  }
 },
 "files__QFIL001": {
  "en": {
   "question": "Write to a file. Write 'Hello File' with with open('memo.txt', 'w', encoding='utf-8') as f:, then print 'saved'.",
   "hint": "'w' mode is write (overwrite). The file closes automatically when the with block ends."
  },
  "zh": {
   "question": "写入文件。用 with open('memo.txt', 'w', encoding='utf-8') as f: 写入 'Hello File'，然后输出 'saved'。",
   "hint": "'w' 模式为写入（覆盖）。with 块结束时文件会自动关闭。"
  }
 },
 "files__QFIL002": {
  "en": {
   "question": "Read a file. Write 'Hello File' to memo.txt, then open it again in 'r' mode and print what read() returns.",
   "hint": "Open in 'r' mode; f.read() returns the whole file as a string."
  },
  "zh": {
   "question": "读取文件。向 memo.txt 写入 'Hello File' 后，再以 'r' 模式打开，输出 read() 读到的内容。",
   "hint": "以 'r' 模式打开，f.read() 以字符串返回整个文件。"
  }
 },
 "files__QFIL003": {
  "en": {
   "question": "Write several lines. Write 'apple\\nbanana\\ncherry' to lines.txt, read it again, and print it as is.",
   "hint": "You can write several lines at once by breaking lines with \\n."
  },
  "zh": {
   "question": "写入多行。向 lines.txt 写入 'apple\\nbanana\\ncherry'，再读出并原样输出。",
   "hint": "用 \\n 换行，可以一次写入多行。"
  }
 },
 "files__QFIL004": {
  "en": {
   "question": "Read line by line. After writing 'apple\\nbanana\\ncherry' to lines.txt, read one line at a time with for line in f: and print the stripped value.",
   "hint": "Looping over a file object gives one line at a time. Remove the trailing newline with strip()."
  },
  "zh": {
   "question": "逐行读取。向 lines.txt 写入 'apple\\nbanana\\ncherry' 后，用 for line in f: 逐行读取，输出 strip() 后的值。",
   "hint": "用 for 循环遍历文件对象会逐行取出。末尾的换行用 strip() 去掉。"
  }
 },
 "files__QFIL005": {
  "en": {
   "question": "Count lines. After writing 'a\\nb\\nc\\nd' to lines.txt, read it with readlines() and print the number of lines.",
   "hint": "readlines() returns a list with each line as an element."
  },
  "zh": {
   "question": "统计行数。向 lines.txt 写入 'a\\nb\\nc\\nd' 后，用 readlines() 读取并输出行数。",
   "hint": "readlines() 返回以每行为元素的列表。"
  }
 },
 "files__QFIL006": {
  "en": {
   "question": "Check whether a file exists. After import os, write 'memo.txt' and print os.path.exists('memo.txt') and os.path.exists('nothing.txt') with print(..., ...).",
   "hint": "os.path.exists(path) is True if the file exists."
  },
  "zh": {
   "question": "检查文件是否存在。import os 后写入 'memo.txt'，用 print(..., ...) 输出 os.path.exists('memo.txt') 和 os.path.exists('nothing.txt')。",
   "hint": "文件存在时 os.path.exists(路径) 为 True。"
  }
 },
 "files__QFIL007": {
  "en": {
   "question": "Write a number to a file. Write the integer 95 to score.txt after converting it with str(), read it back, convert it with int(), and print the value plus 5.",
   "hint": "write() only takes strings, so use str(); convert the value you read with int()."
  },
  "zh": {
   "question": "把数字写入文件。把整数 95 用 str() 转换后写入 score.txt，再读出用 int() 转换，输出加 5 后的值。",
   "hint": "write() 只接受字符串，所以用 str()；读出的值用 int() 转换。"
  }
 },
 "files__QFIL008": {
  "en": {
   "question": "Save and read Korean text. Write '우송대학교' to hangul.txt with encoding='utf-8', read it back, and print it.",
   "hint": "Make it a habit to always specify encoding='utf-8' for non-English text files."
  },
  "zh": {
   "question": "保存并读取韩文。用 encoding='utf-8' 向 hangul.txt 写入 '우송대학교'，再读出并输出。",
   "hint": "处理非英文文件时，要养成指定 encoding='utf-8' 的习惯。"
  }
 },
 "files__QFIL009": {
  "en": {
   "question": "Append mode. Write 'start\\n' to log.txt in 'w' mode, add 'next\\n' in 'a' mode, then read and print the whole content.",
   "hint": "'a' mode writes after the existing content."
  },
  "zh": {
   "question": "追加（append）模式。以 'w' 模式向 log.txt 写入 'start\\n'，再以 'a' 模式追加 'next\\n'，然后读取并输出全部内容。",
   "hint": "'a' 模式会在已有内容后面继续写入。"
  }
 },
 "files__QFIL010": {
  "en": {
   "question": "Write a list to a file line by line. Write names=['Kim','Lee','Park'] to names.txt with writelines and newlines, read it back, and print it.",
   "hint": "writelines([...]) does not add newlines automatically, so add '\\n' yourself."
  },
  "zh": {
   "question": "把列表逐行写入文件。用 writelines 加换行把 names=['Kim','Lee','Park'] 写入 names.txt，再读出并输出。",
   "hint": "writelines([...]) 不会自动添加换行，需要自己加 '\\n'。"
  }
 },
 "files__QFIL011": {
  "en": {
   "question": "Sum numbers from a file. After writing '10\\n20\\n30\\n' to nums.txt, convert each line with int and print the sum.",
   "hint": "Convert each line with int(line) and add them (int ignores the newline)."
  },
  "zh": {
   "question": "从文件中求数字之和。向 nums.txt 写入 '10\\n20\\n30\\n' 后，把每行用 int 转换并输出总和。",
   "hint": "把每行用 int(line) 转换后相加（int 会忽略换行）。"
  }
 },
 "files__QFIL012": {
  "en": {
   "question": "Read with the csv module. Read the prepared 'data.csv' with csv.reader after import csv, and print the first row (header).",
   "hint": "next(csv.reader(f)) returns the first row as a list."
  },
  "zh": {
   "question": "用 csv 模块读取。import csv 后用 csv.reader 读取学习环境中准备好的 'data.csv'，输出第一行（表头）。",
   "hint": "next(csv.reader(f)) 以列表形式返回第一行。"
  }
 },
 "files__QFIL013": {
  "en": {
   "question": "Count rows with the csv module. Read 'data.csv' with csv.reader and print the number of data rows excluding the header.",
   "hint": "Subtract 1 header line from the length of list(csv.reader(f))."
  },
  "zh": {
   "question": "用 csv 模块统计行数。用 csv.reader 读取 'data.csv'，输出不含表头的数据行数。",
   "hint": "用 list(csv.reader(f)) 的长度减去 1 行表头。"
  }
 },
 "files__QFIL014": {
  "en": {
   "question": "Write with the csv module. Write rows=[['name','score'],['Kim',90],['Lee',85]] to out.csv with csv.writer, then read and print the file content. (Pass newline='' to open)",
   "hint": "writerows(2D list) writes several rows at once."
  },
  "zh": {
   "question": "用 csv 模块写入。用 csv.writer 把 rows=[['name','score'],['Kim',90],['Lee',85]] 写入 out.csv，然后读取并输出文件内容。（open 时指定 newline=''）",
   "hint": "writerows(二维列表) 一次写入多行。"
  }
 },
 "files__QFIL015": {
  "en": {
   "question": "What if you open a missing file? Open 'no_file.txt' in 'r' mode and print '파일 없음' (no file) if a FileNotFoundError occurs.",
   "hint": "Opening a missing file in read mode raises FileNotFoundError."
  },
  "zh": {
   "question": "打开不存在的文件会怎样？以 'r' 模式打开 'no_file.txt'，若出现 FileNotFoundError，输出 '파일 없음'（文件不存在）。",
   "hint": "以读取模式打开不存在的文件会引发 FileNotFoundError。"
  }
 },
 "files__QFIL016": {
  "en": {
   "question": "Count words. After writing 'Python is easy and Python is fun' to story.txt, read it and print how many times 'Python' appears.",
   "hint": "Process in the order read() → split() → count('Python')."
  },
  "zh": {
   "question": "统计单词数。向 story.txt 写入 'Python is easy and Python is fun' 后读取，输出 'Python' 出现的次数。",
   "hint": "按 read() → split() → count('Python') 的顺序处理。"
  }
 },
 "files__QFIL017": {
  "en": {
   "question": "Compute an average with csv.DictReader. Read 'students.csv' (student_id,name,math,english,science) with DictReader and print the math average.",
   "hint": "Each row is a dictionary, so access it with r['math']. Values are strings, so convert them with int()."
  },
  "zh": {
   "question": "用 csv.DictReader 求平均值。用 DictReader 读取 'students.csv'（student_id,name,math,english,science），输出 math 的平均值。",
   "hint": "每一行都是字典，用 r['math'] 访问。值是字符串，要用 int() 转换。"
  }
 },
 "files__QFIL018": {
  "en": {
   "question": "Save only matching rows to a new file. From 'data.csv', write only the names of people whose city is 'Seoul' to seoul.txt, one per line, then read and print seoul.txt.",
   "hint": "Filter with DictReader, then try writing with '\\n'.join(...)."
  },
  "zh": {
   "question": "只把符合条件的行保存到新文件。从 'data.csv' 中把 city 为 'Seoul' 的人的 name 逐行写入 seoul.txt，然后读取并输出 seoul.txt。",
   "hint": "用 DictReader 过滤后，试着用 '\\n'.join(...) 写入。"
  }
 },
 "files__QFIL019": {
  "en": {
   "question": "Save and read a JSON file. Save info={'name':'Kim','skills':['Python','SQL']} to info.json with json.dump, read it with json.load, and print the skills list.",
   "hint": "Save with json.dump(object, file) and read with json.load(file)."
  },
  "zh": {
   "question": "保存并读取 JSON 文件。用 json.dump 把 info={'name':'Kim','skills':['Python','SQL']} 保存到 info.json，再用 json.load 读取并输出 skills 列表。",
   "hint": "用 json.dump(对象, 文件) 保存，用 json.load(文件) 读取。"
  }
 },
 "files__QFIL020": {
  "en": {
   "question": "Count people by city. Read 'data.csv' with csv.DictReader, count people per city in a dictionary, and print it.",
   "hint": "Accumulate counts with c[city] = c.get(city, 0) + 1."
  },
  "zh": {
   "question": "按城市统计人数。用 csv.DictReader 读取 'data.csv'，用字典统计每个 city 的人数并输出。",
   "hint": "用 c[city] = c.get(city, 0) + 1 累加个数。"
  }
 },
 "functions__QFUN001": {
  "en": {
   "question": "Define and call a function. Make a function greet() that prints 'Hello!' and call it.",
   "hint": "Indent the line after 'def name():' and call it with name()."
  },
  "zh": {
   "question": "定义并调用函数。编写输出 'Hello!' 的函数 greet() 并调用它。",
   "hint": "def 函数名(): 的下一行要缩进，用 函数名() 调用。"
  }
 },
 "functions__QFUN002": {
  "en": {
   "question": "Use a parameter. Make hello(name) that prints 'Hello, name' and call hello('Kim').",
   "hint": "The name inside the parentheses is the parameter."
  },
  "zh": {
   "question": "使用参数。编写接收名字并输出 'Hello, 名字' 的 hello(name)，然后调用 hello('Kim')。",
   "hint": "括号里的 name 就是参数。"
  }
 },
 "functions__QFUN003": {
  "en": {
   "question": "Return a value with return. Make add(a, b) that returns the sum of two numbers and run print(add(3, 5)).",
   "hint": "return value ends the function and gives the value back to the caller."
  },
  "zh": {
   "question": "用 return 返回值。编写返回两数之和的 add(a, b)，然后执行 print(add(3, 5))。",
   "hint": "return 值 会结束函数并把值返回给调用处。"
  }
 },
 "functions__QFUN004": {
  "en": {
   "question": "Make a square function. Make square(n) return the square of n and print square(9).",
   "hint": "Return n ** 2 or n * n."
  },
  "zh": {
   "question": "编写平方函数。让 square(n) 返回 n 的平方，并输出 square(9)。",
   "hint": "return n ** 2 或 n * n。"
  }
 },
 "functions__QFUN005": {
  "en": {
   "question": "Use a default parameter. Make power(base, exp=2) and print power(5) and power(2, 3) with print(power(5), power(2, 3)).",
   "hint": "Giving a default like exp=2 lets you omit that argument."
  },
  "zh": {
   "question": "使用默认参数。编写 power(base, exp=2)，用 print(power(5), power(2, 3)) 输出两个结果。",
   "hint": "像 exp=2 这样设置默认值后，可以省略该参数。"
  }
 },
 "functions__QFUN006": {
  "en": {
   "question": "A function that takes a list. Make average(nums) that returns the average of a list and print average([80, 90, 100]).",
   "hint": "Return sum(nums) / len(nums)."
  },
  "zh": {
   "question": "接收列表的函数。编写返回列表平均值的 average(nums)，并输出 average([80, 90, 100])。",
   "hint": "return sum(nums) / len(nums)。"
  }
 },
 "functions__QFUN007": {
  "en": {
   "question": "A function that returns a boolean. Make is_even(n) return True if n is even and print is_even(10).",
   "hint": "The comparison n % 2 == 0 is already True/False, so you can return it directly."
  },
  "zh": {
   "question": "返回布尔值的函数。让 is_even(n) 在偶数时返回 True，并输出 is_even(10)。",
   "hint": "比较式 n % 2 == 0 本身就是 True/False，可以直接 return。"
  }
 },
 "functions__QFUN008": {
  "en": {
   "question": "Check the return value of a function without return. Make a function f() that returns nothing and print the result of print(f()).",
   "hint": "Without return, a function returns None."
  },
  "zh": {
   "question": "查看没有 return 的函数的返回值。编写不返回任何值的函数 f()，并输出 print(f()) 的结果。",
   "hint": "没有 return 时，函数返回 None。"
  }
 },
 "functions__QFUN009": {
  "en": {
   "question": "Return multiple values. Make min_max(nums) that returns both the minimum and maximum of a list, then run lo, hi = min_max([3, 9, 1, 7]) and print(lo, hi).",
   "hint": "return a, b comes back as a tuple and can be received by unpacking."
  },
  "zh": {
   "question": "返回多个值。编写同时返回列表最小值和最大值的 min_max(nums)，执行 lo, hi = min_max([3, 9, 1, 7]) 后运行 print(lo, hi)。",
   "hint": "return a, b 会打包成元组返回，可以用解包接收。"
  }
 },
 "functions__QFUN010": {
  "en": {
   "question": "Use keyword arguments. Make intro(name, major), call it as intro(major='AI', name='Kim'), and print 'Kim - AI'.",
   "hint": "Passing name=value works regardless of order."
  },
  "zh": {
   "question": "使用关键字参数。编写 intro(name, major)，以 intro(major='AI', name='Kim') 调用并输出 'Kim - AI'。",
   "hint": "以 名称=值 的形式传递时，与顺序无关。"
  }
 },
 "functions__QFUN011": {
  "en": {
   "question": "Use variable arguments *args. Make total(*args) that adds all numbers it receives and print total(1, 2, 3, 4).",
   "hint": "*args collects multiple arguments into a tuple."
  },
  "zh": {
   "question": "使用可变参数 *args。编写把收到的数全部相加的 total(*args)，并输出 total(1, 2, 3, 4)。",
   "hint": "*args 会把多个参数收集成一个元组。"
  }
 },
 "functions__QFUN012": {
  "en": {
   "question": "Use a lambda function. Store a lambda that multiplies two numbers in mul and print mul(6, 7).",
   "hint": "A lambda is a one-line function of the form lambda params: expression."
  },
  "zh": {
   "question": "使用 lambda 函数。把两数相乘的 lambda 存入 mul，并输出 mul(6, 7)。",
   "hint": "lambda 参数: 表达式 是一行的函数。"
  }
 },
 "functions__QFUN013": {
  "en": {
   "question": "Specify a sort key. Sort words=['banana','kiwi','apple'] by number of letters and print it.",
   "hint": "sorted(list, key=len) sorts by length."
  },
  "zh": {
   "question": "指定排序依据（key）。按字母数对 words=['banana','kiwi','apple'] 排序并输出。",
   "hint": "sorted(列表, key=len) 按长度排序。"
  }
 },
 "functions__QFUN014": {
  "en": {
   "question": "Apply a function to every element with map. Use map and lambda to make a list with each element of nums=[1,2,3] multiplied by 10, and print it.",
   "hint": "Use the form list(map(function, list))."
  },
  "zh": {
   "question": "用 map 对所有元素应用函数。用 map 和 lambda 生成把 nums=[1,2,3] 每个元素乘以 10 的列表并输出。",
   "hint": "使用 list(map(函数, 列表)) 的形式。"
  }
 },
 "functions__QFUN015": {
  "en": {
   "question": "Filter elements with filter. From nums=[5,12,7,20,3], select only values 10 or more with filter and lambda, and print them as a list.",
   "hint": "list(filter(condition_function, list)) — only items where the condition is True remain."
  },
  "zh": {
   "question": "用 filter 过滤元素。从 nums=[5,12,7,20,3] 中用 filter 和 lambda 只选出大于等于 10 的值，以列表输出。",
   "hint": "list(filter(条件函数, 列表)) — 只保留条件为 True 的元素。"
  }
 },
 "functions__QFUN016": {
  "en": {
   "question": "Tell local and global variables apart. Put x=10 globally, call f() which assigns x=99 inside the function, then print the global x.",
   "hint": "A variable assigned inside a function is local and does not affect the outer x."
  },
  "zh": {
   "question": "区分局部变量和全局变量。在全局设 x=10，调用在函数内部赋值 x=99 的 f()，然后输出全局的 x。",
   "hint": "在函数内赋值的变量是局部变量，不会影响外部的 x。"
  }
 },
 "functions__QFUN017": {
  "en": {
   "question": "Make a recursive function. Implement factorial(n) recursively and print factorial(5).",
   "hint": "Return 1 if n is 1 or less, otherwise return n * factorial(n-1)."
  },
  "zh": {
   "question": "编写递归函数。用递归实现 factorial(n)，并输出 factorial(5)。",
   "hint": "n 小于等于 1 时返回 1，否则返回 n * factorial(n-1)。"
  }
 },
 "functions__QFUN018": {
  "en": {
   "question": "Use **kwargs. Make show(**kwargs) that prints each keyword argument as 'key=value' on its own line, and call show(name='Kim', age=25).",
   "hint": "**kwargs collects keyword arguments into a dictionary."
  },
  "zh": {
   "question": "使用 **kwargs。编写把收到的关键字参数按 '键=值' 形式逐行输出的 show(**kwargs)，并调用 show(name='Kim', age=25)。",
   "hint": "**kwargs 会把关键字参数收集成字典。"
  }
 },
 "functions__QFUN019": {
  "en": {
   "question": "Pass a function as an argument. Make apply(func, value) return func(value), and print apply(len, 'python') and apply(abs, -7) together with print(..., ...).",
   "hint": "In Python, functions can be passed around like values, as variables or arguments."
  },
  "zh": {
   "question": "把函数作为参数传递。让 apply(func, value) 返回 func(value)，并用 print(..., ...) 同时输出 apply(len, 'python') 和 apply(abs, -7)。",
   "hint": "在 Python 中，函数也可以像值一样作为变量或参数传递。"
  }
 },
 "functions__QFUN020": {
  "en": {
   "question": "Sort a list of dictionaries. Sort students=[{'name':'Kim','score':85},{'name':'Lee','score':92},{'name':'Park','score':78}] by score in descending order and print only the names as a list.",
   "hint": "Sort with key=lambda s: s['score'], reverse=True, then pick the names with a comprehension."
  },
  "zh": {
   "question": "排序字典列表。将 students=[{'name':'Kim','score':85},{'name':'Lee','score':92},{'name':'Park','score':78}] 按分数降序排序，只把名字以列表形式输出。",
   "hint": "用 key=lambda s: s['score'], reverse=True 排序后，用推导式只取出名字。"
  }
 },
 "io__QIO001": {
  "en": {
   "question": "Print the string 'Hello, Python!' with print().",
   "hint": "Put a quoted string inside the parentheses of print()."
  },
  "zh": {
   "question": "用 print() 输出字符串 'Hello, Python!'。",
   "hint": "在 print() 的括号中放入用引号括起来的字符串。"
  }
 },
 "io__QIO002": {
  "en": {
   "question": "Put several values in print() separated by commas. Print 'AI', '경영', 2026 all at once.",
   "hint": "When separated by commas, one space is placed between the values."
  },
  "zh": {
   "question": "在 print() 中用逗号放入多个值。一次输出 'AI'、'경영'、2026。",
   "hint": "用逗号分隔时，值之间会各加一个空格。"
  }
 },
 "io__QIO003": {
  "en": {
   "question": "Use the sep option. Print 2026, 10, 29 joined with '-'.",
   "hint": "sep='-' decides the character placed between values."
  },
  "zh": {
   "question": "使用 sep 选项。用 '-' 连接输出 2026、10、29。",
   "hint": "sep='-' 决定值之间插入的字符。"
  }
 },
 "io__QIO004": {
  "en": {
   "question": "Use the end option. Run print('A', end='') and print('B') in order to print 'AB' on one line.",
   "hint": "With end='', nothing is added instead of a newline."
  },
  "zh": {
   "question": "使用 end 选项。依次执行 print('A', end='') 和 print('B')，在一行中输出 'AB'。",
   "hint": "设置 end='' 后，不会换行，也不追加任何字符。"
  }
 },
 "io__QIO005": {
  "en": {
   "question": "Practice f-strings. With name='Kim', print 'Hello, Kim' using an f-string.",
   "hint": "Put f before the string and insert values with {variable}."
  },
  "zh": {
   "question": "练习 f-string。当 name='Kim' 时，用 f-string 输出 'Hello, Kim'。",
   "hint": "在字符串前加 f，用 {变量} 插入值。"
  }
 },
 "io__QIO006": {
  "en": {
   "question": "Calculate inside an f-string. With a=3 and b=4, print it in the form '3 + 4 = 7'.",
   "hint": "You can write expressions like a+b inside {}."
  },
  "zh": {
   "question": "在 f-string 中计算。当 a=3、b=4 时，按 '3 + 4 = 7' 的形式输出。",
   "hint": "{} 中也可以写 a+b 这样的表达式。"
  }
 },
 "io__QIO007": {
  "en": {
   "question": "Use the newline character \\n. Print 'Line1' and 'Line2' on two lines with a single print.",
   "hint": "\\n inside a string starts a new line."
  },
  "zh": {
   "question": "使用换行符 \\n。只用一次 print 把 'Line1' 和 'Line2' 输出为两行。",
   "hint": "字符串中的 \\n 表示换行。"
  }
 },
 "io__QIO008": {
  "en": {
   "question": "Assign several variables in one line. Assign with x, y = 10, 20, then print x and y with print(x, y).",
   "hint": "Commas let you assign values to several variables at once."
  },
  "zh": {
   "question": "在一行中给多个变量赋值。用 x, y = 10, 20 赋值后，用 print(x, y) 输出 x 和 y。",
   "hint": "用逗号可以同时给多个变量赋值。"
  }
 },
 "io__QIO009": {
  "en": {
   "question": "Specify decimal places. Print pi=3.14159 to two decimal places with an f-string.",
   "hint": "{value:.2f} rounds and shows 2 decimal places."
  },
  "zh": {
   "question": "指定小数位数。用 f-string 把 pi=3.14159 输出到小数点后两位。",
   "hint": "{值:.2f} 会四舍五入显示到小数点后 2 位。"
  }
 },
 "io__QIO010": {
  "en": {
   "question": "Add thousands separators. Print price=1234567 as '1,234,567' with an f-string.",
   "hint": "{value:,} puts a comma every three digits."
  },
  "zh": {
   "question": "添加千位分隔符。用 f-string 把 price=1234567 输出为 '1,234,567'。",
   "hint": "{值:,} 每三位加一个逗号。"
  }
 },
 "io__QIO011": {
  "en": {
   "question": "Show as a percentage. Print rate=0.875 as '87.5%' with an f-string.",
   "hint": "{value:.1%} multiplies by 100 and adds a % sign."
  },
  "zh": {
   "question": "以百分比显示。用 f-string 把 rate=0.875 输出为 '87.5%'。",
   "hint": "{值:.1%} 会乘以 100 并加上 % 符号。"
  }
 },
 "io__QIO012": {
  "en": {
   "question": "Align within a width. Right-align 'Hi' in a width of 6, add '|' on both sides, and print it. Result: |    Hi|",
   "hint": "{value:>6} right-aligns within a width of 6."
  },
  "zh": {
   "question": "按宽度对齐。把 'Hi' 在 6 格宽度内右对齐，两边加上 '|' 后输出。结果：|    Hi|",
   "hint": "{值:>6} 在 6 格宽度内右对齐。"
  }
 },
 "io__QIO013": {
  "en": {
   "question": "Pad with zeros. Print num=7 as 3 digits: '007'.",
   "hint": "{value:03d} makes a 3-digit integer, filling empty places with 0."
  },
  "zh": {
   "question": "用 0 补位。把 num=7 补成 3 位，输出 '007'。",
   "hint": "{值:03d} 输出 3 位整数，空位用 0 填充。"
  }
 },
 "io__QIO014": {
  "en": {
   "question": "Use center alignment. Center 'AI' in a width of 8, filling the blanks with '*', and print it.",
   "hint": "{value:*^8} fills with '*' and centers (^)."
  },
  "zh": {
   "question": "使用居中对齐。把 'AI' 在 8 格宽度内居中，空位用 '*' 填充后输出。",
   "hint": "{值:*^8} 用 '*' 填充并居中（^）。"
  }
 },
 "io__QIO015": {
  "en": {
   "question": "Use the format() method. Print the result of '{}님의 점수는 {}점'.format('Lee', 95).",
   "hint": "The arguments of format() fill the {} places in order."
  },
  "zh": {
   "question": "使用 format() 方法。输出 '{}님의 점수는 {}점'.format('Lee', 95) 的结果。",
   "hint": "format() 的参数会按顺序填入 {} 的位置。"
  }
 },
 "io__QIO016": {
  "en": {
   "question": "See how round() differs from what you expect. Print the result of round(2.675, 2). (Because of floating-point representation, the result may differ from what you expect.)",
   "hint": "Floats are stored in binary, so 2.675 is actually 2.67499..."
  },
  "zh": {
   "question": "看看 round() 与预期的差别。输出 round(2.675, 2) 的结果。（由于浮点数表示方式，结果可能与预期不同）",
   "hint": "实数以二进制存储，2.675 实际上是 2.67499...。"
  }
 },
 "io__QIO017": {
  "en": {
   "question": "Print a list on one line separated by spaces. Print nums=[1,2,3,4] with print(*nums).",
   "hint": "* unpacks the list and passes each item as an argument to print."
  },
  "zh": {
   "question": "把列表用空格分隔输出在一行。用 print(*nums) 输出 nums=[1,2,3,4]。",
   "hint": "* 会展开列表，把每个元素作为 print 的参数传入。"
  }
 },
 "io__QIO018": {
  "en": {
   "question": "Print in table form. Print the name 'Kim' (left-aligned, 6 wide) and the score 90 (right-aligned, 4 wide) side by side. Result: 'Kim     90'",
   "hint": "Use alignment symbols and widths together, like {name:<6}{score:>4}."
  },
  "zh": {
   "question": "以表格形式输出。把名字 'Kim'（左对齐 6 格）和分数 90（右对齐 4 格）连在一起输出。结果：'Kim     90'",
   "hint": "像 {name:<6}{score:>4} 这样同时使用对齐符号和宽度。"
  }
 },
 "io__QIO019": {
  "en": {
   "question": "Use the f-string debugging notation. With x=42, print f'{x=}' so that 'x=42' appears.",
   "hint": "{variable=} shows the variable name and value together (Python 3.8+)."
  },
  "zh": {
   "question": "使用 f-string 调试写法。当 x=42 时输出 f'{x=}'，使结果为 'x=42'。",
   "hint": "{变量=} 会同时显示变量名和值（Python 3.8+）。"
  }
 },
 "io__QIO020": {
  "en": {
   "question": "Use sep and end together. Print the result of print(1, 2, 3, sep=', ', end='!\\n').",
   "hint": "sep goes between values; end goes at the very end."
  },
  "zh": {
   "question": "同时使用 sep 和 end。输出 print(1, 2, 3, sep=', ', end='!\\n') 的结果。",
   "hint": "sep 放在值之间，end 加在最后。"
  }
 },
 "loops__QLOO001": {
  "en": {
   "question": "Practice for and range. Print the numbers 1 to 5, one per line.",
   "hint": "range(1, 6) is 1 to 5 (the end value is not included)."
  },
  "zh": {
   "question": "练习 for 和 range。逐行输出 1 到 5。",
   "hint": "range(1, 6) 是 1 到 5（不包含结束值）。"
  }
 },
 "loops__QLOO002": {
  "en": {
   "question": "Iterate over a list. Print each element of fruits=['apple','banana','cherry'] on its own line.",
   "hint": "Use 'for variable in list:' to take out elements one by one."
  },
  "zh": {
   "question": "遍历列表。逐行输出 fruits=['apple','banana','cherry'] 的每个元素。",
   "hint": "用 for 变量 in 列表: 逐个取出元素。"
  }
 },
 "loops__QLOO003": {
  "en": {
   "question": "Compute a running total. Use a for loop to find the sum of 1 to 100 and print it.",
   "hint": "Start with total=0 and do total += i in every iteration."
  },
  "zh": {
   "question": "求累加和。用 for 循环求 1 到 100 的和并输出。",
   "hint": "从 total=0 开始，每次循环执行 total += i。"
  }
 },
 "loops__QLOO004": {
  "en": {
   "question": "Use the step of range. Print numbers from 0 to 10 increasing by 2, one per line.",
   "hint": "range(start, end, step) — give 11 as the end so that 10 is included."
  },
  "zh": {
   "question": "使用 range 的步长。逐行输出从 0 到 10、每次加 2 的数。",
   "hint": "range(开始, 结束, 步长) — 结束值写 11 才会包含 10。"
  }
 },
 "loops__QLOO005": {
  "en": {
   "question": "Practice while. Starting from n=1, print n while n is 3 or less, increasing it by 1.",
   "hint": "'while condition:' repeats while the condition is True. Forget to increase and it loops forever!"
  },
  "zh": {
   "question": "练习 while 语句。从 n=1 开始，当 n 小于等于 3 时输出 n 并加 1。",
   "hint": "while 条件: 在条件为真时重复。忘记递增就会无限循环！"
  }
 },
 "loops__QLOO006": {
  "en": {
   "question": "Iterate over a string. Print each character of word='AI' on its own line.",
   "hint": "A for loop can take characters out of a string one at a time."
  },
  "zh": {
   "question": "遍历字符串。逐行输出 word='AI' 的每个字符。",
   "hint": "字符串也可以用 for 循环逐个取出字符。"
  }
 },
 "loops__QLOO007": {
  "en": {
   "question": "Count backwards. Use range to print 5 down to 1, one per line.",
   "hint": "range(5, 0, -1) gives 5,4,3,2,1."
  },
  "zh": {
   "question": "倒数。用 range 逐行倒序输出 5 到 1。",
   "hint": "range(5, 0, -1) 是 5,4,3,2,1。"
  }
 },
 "loops__QLOO008": {
  "en": {
   "question": "Count items that match a condition. In nums=[3,8,12,5,20], count the numbers greater than 10 with a for loop and print the count.",
   "hint": "Start with count=0 and add 1 whenever the condition is True."
  },
  "zh": {
   "question": "统计满足条件的个数。在 nums=[3,8,12,5,20] 中，用 for 循环统计大于 10 的数的个数并输出。",
   "hint": "从 count=0 开始，条件为真时加 1。"
  }
 },
 "loops__QLOO009": {
  "en": {
   "question": "Number items with enumerate. Print names=['Kim','Lee','Park'] starting from 1 in the form '1. Kim', one per line.",
   "hint": "enumerate(list, start=1) gives (number, value)."
  },
  "zh": {
   "question": "用 enumerate 编号。把 names=['Kim','Lee','Park'] 从 1 开始按 '1. Kim' 的形式逐行输出。",
   "hint": "enumerate(列表, start=1) 返回（编号, 值）。"
  }
 },
 "loops__QLOO010": {
  "en": {
   "question": "Loop over two lists together with zip. Print names=['Kim','Lee'] and scores=[90,85] as 'name: score', one per line.",
   "hint": "zip(a, b) pairs up elements at the same position."
  },
  "zh": {
   "question": "用 zip 同时遍历两个列表。把 names=['Kim','Lee']、scores=[90,85] 按 '名字: 分数' 的形式逐行输出。",
   "hint": "zip(a, b) 会把相同位置的元素配对。"
  }
 },
 "loops__QLOO011": {
  "en": {
   "question": "Stop a loop with break. In nums=[4,7,9,12,15], find and print the first number greater than 10, then end the loop.",
   "hint": "When the condition is met, print and leave the for loop with break."
  },
  "zh": {
   "question": "用 break 停止循环。在 nums=[4,7,9,12,15] 中找到第一个大于 10 的数并输出，然后结束循环。",
   "hint": "满足条件后先 print，再用 break 跳出 for 循环。"
  }
 },
 "loops__QLOO012": {
  "en": {
   "question": "Skip with continue. From 1 to 10, skip only multiples of 3 and print the rest on one line separated by spaces. (Use print(i, end=' ') and then print() at the end.)",
   "hint": "continue skips the rest of this iteration and moves to the next one."
  },
  "zh": {
   "question": "用 continue 跳过。在 1 到 10 中只跳过 3 的倍数，把其余的数用空格分隔输出在一行。（使用 print(i, end=' ')，最后再 print()）",
   "hint": "continue 会跳过本次循环剩余部分，进入下一次循环。"
  }
 },
 "loops__QLOO013": {
  "en": {
   "question": "Print a multiplication table. Print the 3 times table from 1 to 9 in the format '3 x 1 = 3'.",
   "hint": "Build the text with an f-string like f'3 x {i} = {3*i}'."
  },
  "zh": {
   "question": "输出九九乘法表。按 '3 x 1 = 3' 的格式输出 3 的乘法表（1 到 9）。",
   "hint": "用 f-string 写成 f'3 x {i} = {3*i}' 的形式。"
  }
 },
 "loops__QLOO014": {
  "en": {
   "question": "Sum the digits with while. Use a while loop to compute the digit sum of n=2026 (2+0+2+6) and print it.",
   "hint": "Take the last digit with n % 10 and shrink n with n //= 10."
  },
  "zh": {
   "question": "用 while 求各位数字之和。用 while 循环求 n=2026 各位数字之和（2+0+2+6）并输出。",
   "hint": "用 n % 10 取出最后一位，用 n //= 10 逐步缩小。"
  }
 },
 "loops__QLOO015": {
  "en": {
   "question": "Find the minimum with a loop. Find the minimum of nums=[42,17,88,5,63] with a for loop, without min(), and print it.",
   "hint": "Use the first element as the reference and replace it whenever a smaller value appears."
  },
  "zh": {
   "question": "用循环求最小值。不用 min()，用 for 循环求 nums=[42,17,88,5,63] 的最小值并输出。",
   "hint": "先把第一个元素作为基准，遇到更小的值就替换。"
  }
 },
 "loops__QLOO016": {
  "en": {
   "question": "Count with a dictionary. Count each character of s='banana' using a for loop and a dictionary, and print the dictionary.",
   "hint": "Accumulate counts with c[ch] = c.get(ch, 0) + 1."
  },
  "zh": {
   "question": "用字典计数。用 for 循环和字典统计 s='banana' 中每个字符的个数并输出。",
   "hint": "用 c[ch] = c.get(ch, 0) + 1 累加个数。"
  }
 },
 "loops__QLOO017": {
  "en": {
   "question": "Draw stars with loops. For floors 1 to 4, print as many '*' as the floor number to make a right triangle.",
   "hint": "'*' * i joins i stars together."
  },
  "zh": {
   "question": "用循环打印星号。从第 1 层到第 4 层，每层输出与层数相同个数的 '*'，组成直角三角形。",
   "hint": "'*' * i 会把 i 个星号连在一起。"
  }
 },
 "loops__QLOO018": {
  "en": {
   "question": "The for-else statement. Check whether n=29 is prime by dividing it by 2 to n-1; print '소수' (prime) if no divisor is found (else), otherwise '소수 아님' (not prime).",
   "hint": "If the for loop ends without break, the else block runs."
  },
  "zh": {
   "question": "for-else 语句。用 2 到 n-1 去除 n=29 判断是否为质数；若没有能整除的数（else）输出 '소수'（质数），否则输出 '소수 아님'（不是质数）。",
   "hint": "for 循环没有遇到 break 而结束时，会执行 else 代码块。"
  }
 },
 "loops__QLOO019": {
  "en": {
   "question": "Build the Fibonacci sequence. Make a list of the first 10 Fibonacci numbers starting with 0, 1 and print it.",
   "hint": "Compute the next number with a, b = b, a + b."
  },
  "zh": {
   "question": "生成斐波那契数列。以 0、1 开头，把斐波那契数列的前 10 个数做成列表并输出。",
   "hint": "用 a, b = b, a + b 计算下一个数。"
  }
 },
 "loops__QLOO020": {
  "en": {
   "question": "Sum a 2D list. Use nested for loops to find the sum of all elements of matrix=[[1,2,3],[4,5,6],[7,8,9]] and print it.",
   "hint": "The outer for takes each row, the inner for takes each value."
  },
  "zh": {
   "question": "求二维列表的总和。用嵌套 for 循环求 matrix=[[1,2,3],[4,5,6],[7,8,9]] 所有元素之和并输出。",
   "hint": "外层 for 取行，内层 for 取每个值。"
  }
 },
 "modules__QMOD001": {
  "en": {
   "question": "Import the math module. After import math, print the result of math.sqrt(16).",
   "hint": "Import with 'import module' and use it as module.function()."
  },
  "zh": {
   "question": "导入 math 模块。import math 后输出 math.sqrt(16) 的结果。",
   "hint": "用 import 模块名 导入，用 模块.函数() 使用。"
  }
 },
 "modules__QMOD002": {
  "en": {
   "question": "Use the pi constant. Round math.pi to 4 decimal places with round and print it.",
   "hint": "math.pi is 3.141592..."
  },
  "zh": {
   "question": "使用圆周率常量。把 math.pi 用 round 四舍五入到小数点后 4 位并输出。",
   "hint": "math.pi 是 3.141592...。"
  }
 },
 "modules__QMOD003": {
  "en": {
   "question": "Use ceiling and floor. Print math.ceil(3.2) and math.floor(3.8) together with print(..., ...).",
   "hint": "ceil rounds up, floor rounds down."
  },
  "zh": {
   "question": "使用向上取整和向下取整。用 print(..., ...) 同时输出 math.ceil(3.2) 和 math.floor(3.8) 的结果。",
   "hint": "ceil 向上取整，floor 向下取整。"
  }
 },
 "modules__QMOD004": {
  "en": {
   "question": "Use from-import. After from math import factorial, print factorial(6).",
   "hint": "Importing with 'from module import function' lets you use it without the module name."
  },
  "zh": {
   "question": "使用 from-import。from math import factorial 后输出 factorial(6)。",
   "hint": "用 from 模块 import 函数 导入后，不需要模块名即可直接使用。"
  }
 },
 "modules__QMOD005": {
  "en": {
   "question": "Use an alias (as). After import math as m, print m.pow(2, 10).",
   "hint": "You can shorten the module name with the name after as (e.g. import numpy as np)."
  },
  "zh": {
   "question": "使用别名（as）。import math as m 后输出 m.pow(2, 10)。",
   "hint": "可以用 as 后面的名字简写模块（例：import numpy as np）。"
  }
 },
 "modules__QMOD006": {
  "en": {
   "question": "Reproduce results with the random module. After import random and random.seed(42), check whether random.randint(1, 10) is between 1 and 10 and print the result.",
   "hint": "randint(a, b) randomly returns an integer from a to b inclusive."
  },
  "zh": {
   "question": "用 random 模块复现结果。import random 后执行 random.seed(42)，检查 random.randint(1, 10) 的结果是否在 1~10 之间并输出。",
   "hint": "randint(a, b) 随机返回 a 到 b（含）之间的整数。"
  }
 },
 "modules__QMOD007": {
  "en": {
   "question": "Use random.choice. Pick one item from menu=['짜장','짬뽕','볶음밥'] with choice, then print whether the chosen value is in menu.",
   "hint": "choice(list) picks one element at random."
  },
  "zh": {
   "question": "使用 random.choice。用 choice 从 menu=['짜장','짬뽕','볶음밥'] 中选一个，然后输出所选值是否在 menu 中。",
   "hint": "choice(列表) 随机选取一个元素。"
  }
 },
 "modules__QMOD008": {
  "en": {
   "question": "Make a date. After from datetime import date, print date(2026, 10, 29).",
   "hint": "Create a date object with date(year, month, day)."
  },
  "zh": {
   "question": "创建日期。from datetime import date 后输出 date(2026, 10, 29)。",
   "hint": "用 date(年, 月, 日) 创建日期对象。"
  }
 },
 "modules__QMOD009": {
  "en": {
   "question": "Find the difference between dates. Print the number of days between date(2026,12,25) and date(2026,10,29) with (d1 - d2).days.",
   "hint": "Subtracting dates gives a timedelta, and .days gives the number of days."
  },
  "zh": {
   "question": "求日期差。用 (d1 - d2).days 输出 date(2026,12,25) 与 date(2026,10,29) 之间的天数。",
   "hint": "日期相减得到 timedelta，用 .days 得到天数。"
  }
 },
 "modules__QMOD010": {
  "en": {
   "question": "Change the date format. Convert date(2026,3,2) with strftime('%Y년 %m월 %d일') and print it.",
   "hint": "%Y is the 4-digit year, %m the 2-digit month, %d the 2-digit day."
  },
  "zh": {
   "question": "修改日期格式。用 strftime('%Y년 %m월 %d일') 转换 date(2026,3,2) 并输出。",
   "hint": "%Y 为 4 位年份，%m 为 2 位月份，%d 为 2 位日期。"
  }
 },
 "modules__QMOD011": {
  "en": {
   "question": "Find a date some days later. Print date(2026,10,29) plus timedelta(days=100).",
   "hint": "Compute n days later with date + timedelta(days=n)."
  },
  "zh": {
   "question": "求若干天后的日期。输出 date(2026,10,29) 加上 timedelta(days=100) 后的日期。",
   "hint": "用 日期 + timedelta(days=n) 计算 n 天后。"
  }
 },
 "modules__QMOD012": {
  "en": {
   "question": "Convert a string to a date. Convert '2026-10-29' with datetime.strptime(s, '%Y-%m-%d') and print .weekday(). (Mon=0 … Sun=6)",
   "hint": "strptime(string, format) converts a string into a datetime."
  },
  "zh": {
   "question": "把字符串转换为日期。用 datetime.strptime(s, '%Y-%m-%d') 转换 '2026-10-29' 后输出 .weekday()。（周一=0 … 周日=6）",
   "hint": "strptime(字符串, 格式) 把字符串转换为 datetime。"
  }
 },
 "modules__QMOD013": {
  "en": {
   "question": "Count frequencies with Counter. After from collections import Counter, print Counter('mississippi').most_common(2).",
   "hint": "most_common(n) returns the n most frequent items as a list of (value, count)."
  },
  "zh": {
   "question": "用 Counter 统计频率。from collections import Counter 后输出 Counter('mississippi').most_common(2)。",
   "hint": "most_common(n) 以（值, 个数）列表的形式返回出现最多的 n 个。"
  }
 },
 "modules__QMOD014": {
  "en": {
   "question": "Use the statistics module. Print the mean and median of scores=[70,85,90,85,100] together with print(..., ...).",
   "hint": "Use statistics.mean() and statistics.median()."
  },
  "zh": {
   "question": "使用 statistics 模块。用 print(..., ...) 同时输出 scores=[70,85,90,85,100] 的平均数（mean）和中位数（median）。",
   "hint": "使用 statistics.mean() 和 statistics.median()。"
  }
 },
 "modules__QMOD015": {
  "en": {
   "question": "Find the mode. Print the result of statistics.mode([3,1,3,2,3,1]).",
   "hint": "mode() returns the most frequent value."
  },
  "zh": {
   "question": "求众数。输出 statistics.mode([3,1,3,2,3,1]) 的结果。",
   "hint": "mode() 返回出现次数最多的值。"
  }
 },
 "modules__QMOD016": {
  "en": {
   "question": "Check part of the list of names in a module. After import math, print the result of 'sqrt' in dir(math).",
   "hint": "dir(module) returns the list of names in the module."
  },
  "zh": {
   "question": "查看模块中的部分名称列表。import math 后输出 'sqrt' in dir(math) 的结果。",
   "hint": "dir(模块) 返回模块中的名称列表。"
  }
 },
 "modules__QMOD017": {
  "en": {
   "question": "Use defaultdict. After from collections import defaultdict, group words=['apple','avocado','banana','blueberry','cherry'] by first letter, convert with dict(...), and print it.",
   "hint": "defaultdict(list) automatically creates an empty list for missing keys."
  },
  "zh": {
   "question": "使用 defaultdict。from collections import defaultdict 后，把 words=['apple','avocado','banana','blueberry','cherry'] 按首字母分组，用 dict(...) 转换后输出。",
   "hint": "defaultdict(list) 会为不存在的键自动创建空列表。"
  }
 },
 "modules__QMOD018": {
  "en": {
   "question": "Convert with the json module. Turn data={'name':'Kim','score':95} into a string with json.dumps, read it back with json.loads, and print ['score'].",
   "hint": "dumps: object → JSON string; loads: JSON string → object."
  },
  "zh": {
   "question": "用 json 模块转换。用 json.dumps 把 data={'name':'Kim','score':95} 转为字符串，再用 json.loads 读回，输出 ['score']。",
   "hint": "dumps 是对象→JSON 字符串，loads 是 JSON 字符串→对象。"
  }
 },
 "modules__QMOD019": {
  "en": {
   "question": "Make combinations with itertools. After from itertools import combinations, print all combinations of 2 from ['A','B','C'] as a list.",
   "hint": "combinations(list, 2) makes tuples of 2 items chosen without order."
  },
  "zh": {
   "question": "用 itertools 生成组合。from itertools import combinations 后，以列表形式输出从 ['A','B','C'] 中取 2 个的所有组合。",
   "hint": "combinations(列表, 2) 生成不考虑顺序、每次取 2 个的元组。"
  }
 },
 "modules__QMOD020": {
  "en": {
   "question": "Reproduce the same result with random.seed. After random.seed(7), store random.sample(range(1, 46), 6) in a; after random.seed(7) again, store the same code in b; print a == b.",
   "hint": "With the same seed, the random results are reproduced exactly."
  },
  "zh": {
   "question": "用 random.seed 复现相同结果。random.seed(7) 后把 random.sample(range(1, 46), 6) 存入 a；再次 random.seed(7) 后把相同代码的结果存入 b，输出 a == b。",
   "hint": "种子相同时，随机结果也会完全相同。"
  }
 },
 "numpy__QNUM001": {
  "en": {
   "question": "Find the sum of a NumPy array. Print the sum of arr=np.array([1,2,3,4]).",
   "example": "Try running: import numpy as np; arr = np.array([1,2,3,4]); print(arr.sum())",
   "hint": "The sum of a NumPy array can be computed with arr.sum() or np.sum(arr)."
  },
  "zh": {
   "question": "求 NumPy 数组的和。输出 arr=np.array([1,2,3,4]) 的总和。",
   "example": "试着运行：import numpy as np; arr = np.array([1,2,3,4]); print(arr.sum())",
   "hint": "NumPy 数组的和可以用 arr.sum() 或 np.sum(arr) 计算。"
  }
 },
 "numpy__QNUM002": {
  "en": {
   "question": "Use np.arange to make an array from 0 to 4, then print its length.",
   "example": "Try running: arr = np.arange(5); print(len(arr))",
   "hint": "np.arange(5) creates [0 1 2 3 4]."
  },
  "zh": {
   "question": "用 np.arange 创建 0 到 4 的数组，然后输出其长度。",
   "example": "试着运行：arr = np.arange(5); print(len(arr))",
   "hint": "np.arange(5) 生成 [0 1 2 3 4]。"
  }
 },
 "numpy__QNUM003": {
  "en": {
   "question": "Make a 2x2 array and find its mean. Print the mean of arr=np.array([[1,3],[5,7]]).",
   "example": "Try running: arr = np.array([[1,3],[5,7]]); print(arr.mean())",
   "hint": "mean() returns the average of all elements."
  },
  "zh": {
   "question": "创建 2x2 数组并求平均值。输出 arr=np.array([[1,3],[5,7]]) 的平均值。",
   "example": "试着运行：arr = np.array([[1,3],[5,7]]); print(arr.mean())",
   "hint": "mean() 返回所有元素的平均值。"
  }
 },
 "numpy__QNUM004": {
  "en": {
   "question": "Find the maximum of an array. Print the largest value in arr=np.array([-1,0,4,2]).",
   "example": "Try running: arr = np.array([-1,0,4,2]); print(arr.max())",
   "hint": "max() returns the largest value in the array."
  },
  "zh": {
   "question": "求数组的最大值。输出 arr=np.array([-1,0,4,2]) 中的最大值。",
   "example": "试着运行：arr = np.array([-1,0,4,2]); print(arr.max())",
   "hint": "max() 返回数组中最大的值。"
  }
 },
 "numpy__QNUM005": {
  "en": {
   "question": "Check the shape of an array. Print the shape of arr=np.arange(12).reshape(3,4).",
   "example": "Try running: arr = np.arange(12).reshape(3,4); print(arr.shape)",
   "hint": "The shape attribute holds (rows, columns)."
  },
  "zh": {
   "question": "查看数组的形状。输出 arr=np.arange(12).reshape(3,4) 的 shape。",
   "example": "试着运行：arr = np.arange(12).reshape(3,4); print(arr.shape)",
   "hint": "shape 属性包含（行, 列）信息。"
  }
 },
 "numpy__QNUM006": {
  "en": {
   "question": "Practice slicing. From arr=np.array([0,1,2,3,4,5]), print only the first three elements.",
   "example": "Try running: arr = np.array([0,1,2,3,4,5]); print(arr[:3])",
   "hint": "Python's slicing rules apply as they are."
  },
  "zh": {
   "question": "练习切片。从 arr=np.array([0,1,2,3,4,5]) 中截取前三个元素并输出。",
   "example": "试着运行：arr = np.array([0,1,2,3,4,5]); print(arr[:3])",
   "hint": "Python 的切片规则同样适用。"
  }
 },
 "numpy__QNUM007": {
  "en": {
   "question": "Do element-wise addition. With a=np.array([1,2,3]) and b=np.array([4,5,6]), print a+b.",
   "example": "Try running: a = np.array([1,2,3]); b = np.array([4,5,6]); print(a+b)",
   "hint": "Using + between NumPy arrays adds elements at the same positions."
  },
  "zh": {
   "question": "进行逐元素加法。当 a=np.array([1,2,3])、b=np.array([4,5,6]) 时，输出 a+b 的结果。",
   "example": "试着运行：a = np.array([1,2,3]); b = np.array([4,5,6]); print(a+b)",
   "hint": "NumPy 数组之间使用 + 时，同一位置的元素相加。"
  }
 },
 "numpy__QNUM008": {
  "en": {
   "question": "Practice scalar multiplication. Print arr=np.array([2,4,6]) multiplied by 3.",
   "example": "Try running: arr = np.array([2,4,6]); print(arr*3)",
   "hint": "Multiplying an array by an integer multiplies every element."
  },
  "zh": {
   "question": "练习标量乘法。输出 arr=np.array([2,4,6]) 乘以 3 的结果。",
   "example": "试着运行：arr = np.array([2,4,6]); print(arr*3)",
   "hint": "数组乘以整数时，每个元素都会相乘。"
  }
 },
 "numpy__QNUM009": {
  "en": {
   "question": "Find the mean of an integer array. Print the mean of arr=np.arange(1,6).",
   "example": "Try running: arr = np.arange(1,6); print(arr.mean())",
   "hint": "The mean of 1 to 5 is (1+2+3+4+5)/5."
  },
  "zh": {
   "question": "求整数数组的平均值。输出 arr=np.arange(1,6) 的平均值。",
   "example": "试着运行：arr = np.arange(1,6); print(arr.mean())",
   "hint": "1 到 5 的平均值为 (1+2+3+4+5)/5。"
  }
 },
 "numpy__QNUM010": {
  "en": {
   "question": "Select a specific element from a 2D array. From arr=np.array([[10,20],[30,40]]), get 40 by index and print it.",
   "example": "Try running: arr = np.array([[10,20],[30,40]]); print(arr[1,1])",
   "hint": "A 2D array is indexed in [row, column] order."
  },
  "zh": {
   "question": "从二维数组中选取特定元素。从 arr=np.array([[10,20],[30,40]]) 中用索引取出 40 并输出。",
   "example": "试着运行：arr = np.array([[10,20],[30,40]]); print(arr[1,1])",
   "hint": "二维数组按 [行, 列] 的顺序索引。"
  }
 },
 "numpy__QNUM011": {
  "en": {
   "question": "Generate 3 random numbers between 0 and 1 and print them as an array.",
   "example": "Try running: np.random.seed(0); arr = np.random.rand(3); print(arr)",
   "hint": "Values can differ each run, but here an array with 3 random numbers is printed."
  },
  "zh": {
   "question": "生成 3 个 0~1 之间的随机数并以数组形式输出。",
   "example": "试着运行：np.random.seed(0); arr = np.random.rand(3); print(arr)",
   "hint": "每次运行的值可能不同，这里会输出包含 3 个随机数的数组。"
  }
 },
 "numpy__QNUM012": {
  "en": {
   "question": "Generate normally distributed random numbers as a 2x2 array and print it.",
   "example": "Try running: np.random.seed(0); arr = np.random.randn(2,2); print(arr)",
   "hint": "Values drawn from a normal distribution with mean 0 and standard deviation 1 appear in a 2x2 shape."
  },
  "zh": {
   "question": "生成 2x2 的正态分布随机数数组并输出。",
   "example": "试着运行：np.random.seed(0); arr = np.random.randn(2,2); print(arr)",
   "hint": "从均值 0、标准差 1 的正态分布中抽取的值以 2x2 形式输出。"
  }
 },
 "numpy__QNUM013": {
  "en": {
   "question": "Find the standard deviation of an array. Print the standard deviation of arr=np.array([1,2,3,4]).",
   "example": "Try running: arr = np.array([1,2,3,4]); print(arr.std())",
   "hint": "std() returns the standard deviation."
  },
  "zh": {
   "question": "求数组的标准差。输出 arr=np.array([1,2,3,4]) 的标准差。",
   "example": "试着运行：arr = np.array([1,2,3,4]); print(arr.std())",
   "hint": "std() 返回标准差。"
  }
 },
 "numpy__QNUM014": {
  "en": {
   "question": "Sort an array in ascending order. Print the sorted result of arr=np.array([3,1,4,2]).",
   "example": "Try running: arr = np.array([3,1,4,2]); print(np.sort(arr))",
   "hint": "np.sort returns a new sorted array."
  },
  "zh": {
   "question": "将数组按升序排序。输出 arr=np.array([3,1,4,2]) 排序后的结果。",
   "example": "试着运行：arr = np.array([3,1,4,2]); print(np.sort(arr))",
   "hint": "np.sort 返回一个排好序的新数组。"
  }
 },
 "numpy__QNUM015": {
  "en": {
   "question": "Remove duplicate values. From arr=np.array([1,1,2,2,3]), keep only unique values and print them.",
   "example": "Try running: arr = np.array([1,1,2,2,3]); print(np.unique(arr))",
   "hint": "np.unique returns a sorted array of unique values."
  },
  "zh": {
   "question": "去除重复值。从 arr=np.array([1,1,2,2,3]) 中只保留唯一值并输出。",
   "example": "试着运行：arr = np.array([1,1,2,2,3]); print(np.unique(arr))",
   "hint": "np.unique 返回排好序的唯一值数组。"
  }
 },
 "numpy__QNUM016": {
  "en": {
   "question": "Practice boolean indexing. From arr=np.array([1,2,3,4,5]), select only the even numbers and print them.",
   "example": "Try running: arr = np.array([1,2,3,4,5]); print(arr[arr%2==0])",
   "hint": "Only positions where the condition is True are selected."
  },
  "zh": {
   "question": "练习布尔索引。从 arr=np.array([1,2,3,4,5]) 中只选出偶数并输出。",
   "example": "试着运行：arr = np.array([1,2,3,4,5]); print(arr[arr%2==0])",
   "hint": "只会选中条件为 True 的位置。"
  }
 },
 "numpy__QNUM017": {
  "en": {
   "question": "Find sums along an axis. Print the axis=0 sum of arr=np.array([[1,2],[3,4]]).",
   "example": "Try running: arr = np.array([[1,2],[3,4]]); print(arr.sum(axis=0))",
   "hint": "axis=0 means summing down each column."
  },
  "zh": {
   "question": "按轴求和。输出 arr=np.array([[1,2],[3,4]]) 沿 axis=0 的和。",
   "example": "试着运行：arr = np.array([[1,2],[3,4]]); print(arr.sum(axis=0))",
   "hint": "axis=0 表示按列方向求和。"
  }
 },
 "numpy__QNUM018": {
  "en": {
   "question": "Copy an array. Make a copy b of arr=np.array([1,2,3]) and print b.",
   "example": "Try running: arr = np.array([1,2,3]); b = arr.copy(); print(b)",
   "hint": "copy() creates a new array independent of the original."
  },
  "zh": {
   "question": "复制数组。创建 arr=np.array([1,2,3]) 的副本 b 并输出 b。",
   "example": "试着运行：arr = np.array([1,2,3]); b = arr.copy(); print(b)",
   "hint": "使用 copy() 会创建与原数组独立的新数组。"
  }
 },
 "numpy__QNUM019": {
  "en": {
   "question": "Check the data type of an array. Print the dtype of arr=np.array([1,2,3]).",
   "example": "Try running: arr = np.array([1,2,3]); print(arr.dtype)",
   "hint": "The dtype of a default integer array is usually int32 or int64."
  },
  "zh": {
   "question": "查看数组的数据类型。输出 arr=np.array([1,2,3]) 的 dtype。",
   "example": "试着运行：arr = np.array([1,2,3]); print(arr.dtype)",
   "hint": "默认整数数组的 dtype 通常是 int32 或 int64。"
  }
 },
 "numpy__QNUM020": {
  "en": {
   "question": "Practice type conversion. Convert arr=np.array([1,2,3]) to float and print its dtype.",
   "example": "Try running: arr = np.array([1,2,3]); arr = arr.astype(float); print(arr.dtype)",
   "hint": "Use astype to convert to the data type you want."
  },
  "zh": {
   "question": "练习类型转换。将 arr=np.array([1,2,3]) 转为 float 类型并输出 dtype。",
   "example": "试着运行：arr = np.array([1,2,3]); arr = arr.astype(float); print(arr.dtype)",
   "hint": "可以用 astype 转换为所需的数据类型。"
  }
 },
 "operations__QOPE001": {
  "en": {
   "question": "Practice addition. Print the result of 7+5.",
   "example": "Try running: print(7+5)",
   "hint": "Integer addition uses the + operator."
  },
  "zh": {
   "question": "练习加法。输出 7+5 的结果。",
   "example": "试着运行：print(7+5)",
   "hint": "整数加法使用 + 运算符。"
  }
 },
 "operations__QOPE002": {
  "en": {
   "question": "Practice subtraction. Print the result of 20-8.",
   "example": "Try running: print(20-8)",
   "hint": "Subtraction uses the - operator."
  },
  "zh": {
   "question": "练习减法。输出 20-8 的结果。",
   "example": "试着运行：print(20-8)",
   "hint": "减法使用 - 运算符。"
  }
 },
 "operations__QOPE003": {
  "en": {
   "question": "Practice multiplication. Print the result of 6*7.",
   "example": "Try running: print(6*7)",
   "hint": "Multiplication uses the * operator."
  },
  "zh": {
   "question": "练习乘法。输出 6*7 的结果。",
   "example": "试着运行：print(6*7)",
   "hint": "乘法使用 * 运算符。"
  }
 },
 "operations__QOPE004": {
  "en": {
   "question": "Check the result of float division. Print the result of 7/2.",
   "example": "Try running: print(7/2)",
   "hint": "The / operator always performs float division."
  },
  "zh": {
   "question": "查看浮点除法的结果。输出 7/2 的结果。",
   "example": "试着运行：print(7/2)",
   "hint": "/ 运算符总是进行浮点除法。"
  }
 },
 "operations__QOPE005": {
  "en": {
   "question": "Practice getting only the quotient. Use the // operator to print the quotient of 17 divided by 5.",
   "example": "Try running: print(17//5)",
   "hint": "The // operator returns only the quotient of integer division."
  },
  "zh": {
   "question": "练习只求商的运算。用 // 运算符求 17 除以 5 的商并输出。",
   "example": "试着运行：print(17//5)",
   "hint": "// 运算符只返回整数除法的商。"
  }
 },
 "operations__QOPE006": {
  "en": {
   "question": "Practice getting only the remainder. Use the % operator to print the remainder of 17 divided by 5.",
   "example": "Try running: print(17%5)",
   "hint": "The % operator returns the remainder."
  },
  "zh": {
   "question": "练习只求余数的运算。用 % 运算符求 17 除以 5 的余数并输出。",
   "example": "试着运行：print(17%5)",
   "hint": "% 运算符返回余数。"
  }
 },
 "operations__QOPE007": {
  "en": {
   "question": "Practice exponentiation. Print 2 to the power of 5.",
   "example": "Try running: print(2**5)",
   "hint": "The ** operator means power."
  },
  "zh": {
   "question": "练习乘方运算。输出 2 的 5 次方。",
   "example": "试着运行：print(2**5)",
   "hint": "** 运算符表示乘方。"
  }
 },
 "operations__QOPE008": {
  "en": {
   "question": "Practice comparison. Print the result of 10 >= 7.",
   "example": "Try running: print(10>=7)",
   "hint": "A comparison result is a boolean (True/False)."
  },
  "zh": {
   "question": "练习比较运算。输出 10 >= 7 的结果。",
   "example": "试着运行：print(10>=7)",
   "hint": "比较运算的结果是布尔值（True/False）。"
  }
 },
 "operations__QOPE009": {
  "en": {
   "question": "Compare for equality. Print the result of 5==3.",
   "example": "Try running: print(5==3)",
   "hint": "They are not equal, so the result is False."
  },
  "zh": {
   "question": "比较是否相等。输出 5==3 的结果。",
   "example": "试着运行：print(5==3)",
   "hint": "两者不相等，所以结果是 False。"
  }
 },
 "operations__QOPE010": {
  "en": {
   "question": "Practice logical AND. Print the result of True and (5>3).",
   "example": "Try running: print(True and (5>3))",
   "hint": "The comparison in parentheses is True, so the whole result is True."
  },
  "zh": {
   "question": "练习逻辑与运算。输出 True and (5>3) 的结果。",
   "example": "试着运行：print(True and (5>3))",
   "hint": "括号内的比较为 True，所以整体结果也是 True。"
  }
 },
 "operations__QOPE011": {
  "en": {
   "question": "Practice logical OR. Print the result of False or (2==2).",
   "example": "Try running: print(False or (2==2))",
   "hint": "In OR, if at least one side is True, the result is True."
  },
  "zh": {
   "question": "练习逻辑或运算。输出 False or (2==2) 的结果。",
   "example": "试着运行：print(False or (2==2))",
   "hint": "在或运算中，只要有一个为 True，结果就是 True。"
  }
 },
 "operations__QOPE012": {
  "en": {
   "question": "Practice the not operator. Print the result of not (3>1).",
   "example": "Try running: print(not (3>1))",
   "hint": "3>1 is True, so applying not gives False."
  },
  "zh": {
   "question": "练习 not 运算。输出 not (3>1) 的结果。",
   "example": "试着运行：print(not (3>1))",
   "hint": "3>1 为 True，取 not 后变为 False。"
  }
 },
 "operations__QOPE013": {
  "en": {
   "question": "Use a compound assignment operator. Start with a=10, do a+=5, then print a.",
   "example": "Try running: a = 10; a += 5; print(a)",
   "hint": "a+=5 is the same as a=a+5."
  },
  "zh": {
   "question": "使用复合赋值运算符。从 a=10 开始执行 a+=5，然后输出 a。",
   "example": "试着运行：a = 10; a += 5; print(a)",
   "hint": "a+=5 等同于 a=a+5。"
  }
 },
 "operations__QOPE014": {
  "en": {
   "question": "Repeat a string. Print 'AI' repeated 3 times.",
   "example": "Try running: print('AI'*3)",
   "hint": "Multiplying a string by an integer creates a repeated string."
  },
  "zh": {
   "question": "重复字符串。输出将 'AI' 重复 3 次的结果。",
   "example": "试着运行：print('AI'*3)",
   "hint": "字符串乘以整数会得到重复的字符串。"
  }
 },
 "operations__QOPE015": {
  "en": {
   "question": "Practice the idea of checking odd numbers. Print the result of 9%2==1.",
   "example": "Try running: print(9%2==1)",
   "hint": "If the remainder is 1, the number is odd."
  },
  "zh": {
   "question": "练习判断奇数的思路。输出 9%2==1 的结果。",
   "example": "试着运行：print(9%2==1)",
   "hint": "余数为 1 就是奇数。"
  }
 },
 "operations__QOPE016": {
  "en": {
   "question": "Practice the idea of checking even numbers. Print the result of 14%2==0.",
   "example": "Try running: print(14%2==0)",
   "hint": "If the remainder is 0, the number is even."
  },
  "zh": {
   "question": "练习判断偶数的思路。输出 14%2==0 的结果。",
   "example": "试着运行：print(14%2==0)",
   "hint": "余数为 0 就是偶数。"
  }
 },
 "operations__QOPE017": {
  "en": {
   "question": "Check operator precedence. Print the result of 2+3*4.",
   "example": "Try running: print(2+3*4)",
   "hint": "Multiplication is calculated before addition."
  },
  "zh": {
   "question": "查看运算符优先级。输出 2+3*4 的结果。",
   "example": "试着运行：print(2+3*4)",
   "hint": "乘法先于加法计算。"
  }
 },
 "operations__QOPE018": {
  "en": {
   "question": "Change precedence with parentheses. Print the result of (2+3)*4.",
   "example": "Try running: print((2+3)*4)",
   "hint": "What is inside the parentheses is calculated first."
  },
  "zh": {
   "question": "用括号改变优先级。输出 (2+3)*4 的结果。",
   "example": "试着运行：print((2+3)*4)",
   "hint": "括号内的部分先计算。"
  }
 },
 "operations__QOPE019": {
  "en": {
   "question": "Practice the sign operator. Print the result of -(-5).",
   "example": "Try running: print(-(-5))",
   "hint": "Adding another - to a negative number makes it positive."
  },
  "zh": {
   "question": "练习符号运算。输出 -(-5) 的结果。",
   "example": "试着运行：print(-(-5))",
   "hint": "负数前再加一个 - 就变成正数。"
  }
 },
 "operations__QOPE020": {
  "en": {
   "question": "Evaluate a compound expression. Print the result of (10-3)//2.",
   "example": "Try running: print((10-3)//2)",
   "hint": "First compute 10-3, then do integer division."
  },
  "zh": {
   "question": "计算复合表达式。输出 (10-3)//2 的结果。",
   "example": "试着运行：print((10-3)//2)",
   "hint": "先计算 10-3，再进行整数除法。"
  }
 },
 "pandas__QPAN001": {
  "en": {
   "question": "Make a Series from a list. Create a Series from [10,20,30] and print its values as they are.",
   "example": "Try running: import pandas as pd; s = pd.Series([10,20,30]); print(s.values)",
   "hint": "s.values shows only the values as a NumPy array."
  },
  "zh": {
   "question": "用列表创建 Series。用 [10,20,30] 创建 Series 并原样输出其值。",
   "example": "试着运行：import pandas as pd; s = pd.Series([10,20,30]); print(s.values)",
   "hint": "s.values 以 NumPy 数组形式只显示值。"
  }
 },
 "pandas__QPAN002": {
  "en": {
   "question": "Make a DataFrame from a dictionary. Create df from {'name':['Kim','Lee'],'score':[80,90]} and print df.shape.",
   "example": "Try running: df = pd.DataFrame({'name':['Kim','Lee'],'score':[80,90]}); print(df.shape)",
   "hint": "There are two rows and two columns, so the result is (2, 2)."
  },
  "zh": {
   "question": "用字典创建 DataFrame。用 {'name':['Kim','Lee'],'score':[80,90]} 创建 df 并输出 df.shape。",
   "example": "试着运行：df = pd.DataFrame({'name':['Kim','Lee'],'score':[80,90]}); print(df.shape)",
   "hint": "有两行两列，所以结果是 (2, 2)。"
  }
 },
 "pandas__QPAN003": {
  "en": {
   "question": "Select a single column. Select the 'score' column of df and print its mean. df has score [70,80,90].",
   "example": "Try running: df = pd.DataFrame({'score':[70,80,90]}); print(df['score'].mean())",
   "hint": "The mean of 70, 80, 90 is 80."
  },
  "zh": {
   "question": "选择单列。选取 df 的 'score' 列并输出其平均值。df 的 score 为 [70,80,90]。",
   "example": "试着运行：df = pd.DataFrame({'score':[70,80,90]}); print(df['score'].mean())",
   "hint": "70、80、90 的平均值是 80。"
  }
 },
 "pandas__QPAN004": {
  "en": {
   "question": "Practice filtering rows. Keep only rows of df where age is 20 or more, and print the number of rows. age=[18,22,25].",
   "example": "Try running: df = pd.DataFrame({'age':[18,22,25]}); print(len(df[df['age']>=20]))",
   "hint": "Filter with a condition, then count rows with len."
  },
  "zh": {
   "question": "练习行筛选。只保留 df 中 age 大于等于 20 的行，并输出行数。age=[18,22,25]。",
   "example": "试着运行：df = pd.DataFrame({'age':[18,22,25]}); print(len(df[df['age']>=20]))",
   "hint": "先用条件筛选，再用 len 统计行数。"
  }
 },
 "pandas__QPAN005": {
  "en": {
   "question": "Add a new column. With price=[1000,2000,3000] and qty=[1,2,3] in df, add a column total=price*qty and print the sum of total.",
   "example": "Try running: df = pd.DataFrame({'price':[1000,2000,3000],'qty':[1,2,3]}); df['total'] = df['price']*df['qty']; print(df['total'].sum())",
   "hint": "Multiplying two Series computes the product row by row."
  },
  "zh": {
   "question": "添加新列。df 中有 price=[1000,2000,3000]、qty=[1,2,3]，添加 total=price*qty 列并输出 total 的总和。",
   "example": "试着运行：df = pd.DataFrame({'price':[1000,2000,3000],'qty':[1,2,3]}); df['total'] = df['price']*df['qty']; print(df['total'].sum())",
   "hint": "两个 Series 相乘会逐行计算乘积。"
  }
 },
 "pandas__QPAN006": {
  "en": {
   "question": "Fill missing values. In df with score=[10,None,30], fill missing values with 0 and print the sum of score.",
   "example": "Try running: df = pd.DataFrame({'score':[10,None,30]}); df['score'] = df['score'].fillna(0); print(df['score'].sum())",
   "hint": "Replace None with 0 using fillna(0), then compute the sum."
  },
  "zh": {
   "question": "填充缺失值。在 score=[10,None,30] 的 df 中用 0 填充缺失值，然后输出 score 的总和。",
   "example": "试着运行：df = pd.DataFrame({'score':[10,None,30]}); df['score'] = df['score'].fillna(0); print(df['score'].sum())",
   "hint": "用 fillna(0) 把 None 换成 0 后再求和。"
  }
 },
 "pandas__QPAN007": {
  "en": {
   "question": "Remove duplicates. In df with value=[1,1,2,2,3], print how many unique values remain after removing duplicates.",
   "example": "Try running: df = pd.DataFrame({'value':[1,1,2,2,3]}); print(df['value'].nunique())",
   "hint": "nunique returns the number of unique values."
  },
  "zh": {
   "question": "去除重复。在 value=[1,1,2,2,3] 的 df 中，输出去重后剩下的唯一值个数。",
   "example": "试着运行：df = pd.DataFrame({'value':[1,1,2,2,3]}); print(df['value'].nunique())",
   "hint": "nunique 返回唯一值的个数。"
  }
 },
 "pandas__QPAN008": {
  "en": {
   "question": "Rename a column. When df's columns are ['A','B'], rename A to X and print df.columns.",
   "example": "Try running: df = pd.DataFrame([[1,2],[3,4]], columns=['A','B']); df = df.rename(columns={'A':'X'}); print(df.columns)",
   "hint": "['X','B'] is printed as an Index object."
  },
  "zh": {
   "question": "修改列名。当 df 的列名为 ['A','B'] 时，把 A 改为 X 并输出 df.columns。",
   "example": "试着运行：df = pd.DataFrame([[1,2],[3,4]], columns=['A','B']); df = df.rename(columns={'A':'X'}); print(df.columns)",
   "hint": "会以 Index 对象形式输出 ['X','B']。"
  }
 },
 "pandas__QPAN009": {
  "en": {
   "question": "Practice sorting. Sort df's score=[50,90,70] in descending order and print the first score.",
   "example": "Try running: df = pd.DataFrame({'score':[50,90,70]}); df = df.sort_values('score', ascending=False); print(df['score'].iloc[0])",
   "hint": "After sorting in descending order, the first value is the maximum."
  },
  "zh": {
   "question": "练习排序。将 df 的 score=[50,90,70] 按降序排序后输出第一个 score 值。",
   "example": "试着运行：df = pd.DataFrame({'score':[50,90,70]}); df = df.sort_values('score', ascending=False); print(df['score'].iloc[0])",
   "hint": "降序排序后，第一个值就是最大值。"
  }
 },
 "pandas__QPAN010": {
  "en": {
   "question": "Use groupby to get group means. With group=['A','A','B'] and score=[10,30,20] in df, print the mean of group A.",
   "example": "Try running: df = pd.DataFrame({'group':['A','A','B'],'score':[10,30,20]}); g = df.groupby('group')['score'].mean(); print(g['A'])",
   "hint": "The mean of group A is (10+30)/2."
  },
  "zh": {
   "question": "用 groupby 求分组平均值。df 中 group=['A','A','B']、score=[10,30,20]，输出 A 组的平均值。",
   "example": "试着运行：df = pd.DataFrame({'group':['A','A','B'],'score':[10,30,20]}); g = df.groupby('group')['score'].mean(); print(g['A'])",
   "hint": "A 组的平均值为 (10+30)/2。"
  }
 },
 "pandas__QPAN011": {
  "en": {
   "question": "Set an index. With name=['Kim','Lee'] and score=[80,90] in df, set name as the index and print df.index.",
   "example": "Try running: df = pd.DataFrame({'name':['Kim','Lee'],'score':[80,90]}); df = df.set_index('name'); print(df.index)",
   "hint": "It is displayed in the form Index(['Kim','Lee'], dtype='object')."
  },
  "zh": {
   "question": "设置索引。df 中 name=['Kim','Lee']、score=[80,90]，将 name 设为索引后输出 df.index。",
   "example": "试着运行：df = pd.DataFrame({'name':['Kim','Lee'],'score':[80,90]}); df = df.set_index('name'); print(df.index)",
   "hint": "会以 Index(['Kim','Lee'], dtype='object') 的形式显示。"
  }
 },
 "pandas__QPAN012": {
  "en": {
   "question": "Select a row with iloc. From df's score=[60,70,80], select the score of the second row with iloc and print it.",
   "example": "Try running: df = pd.DataFrame({'score':[60,70,80]}); print(df['score'].iloc[1])",
   "hint": "iloc[1] is the second row."
  },
  "zh": {
   "question": "用 iloc 选择行。从 df 的 score=[60,70,80] 中用 iloc 选取第二行的 score 并输出。",
   "example": "试着运行：df = pd.DataFrame({'score':[60,70,80]}); print(df['score'].iloc[1])",
   "hint": "iloc[1] 是第二行。"
  }
 },
 "pandas__QPAN013": {
  "en": {
   "question": "Use a condition with loc. From df's score=[60,85,90], print the number of rows where score is 80 or more.",
   "example": "Try running: df = pd.DataFrame({'score':[60,85,90]}); print(len(df.loc[df['score']>=80]))",
   "hint": "Two rows match the condition."
  },
  "zh": {
   "question": "用 loc 加条件。从 df 的 score=[60,85,90] 中输出 score 大于等于 80 的行数。",
   "example": "试着运行：df = pd.DataFrame({'score':[60,85,90]}); print(len(df.loc[df['score']>=80]))",
   "hint": "有两行符合条件。"
  }
 },
 "pandas__QPAN014": {
  "en": {
   "question": "View summary statistics with describe. For df's value=[1,2,3,4], print the count from df['value'].describe().",
   "example": "Try running: df = pd.DataFrame({'value':[1,2,3,4]}); desc = df['value'].describe(); print(desc['count'])",
   "hint": "count is the number of observations, 4."
  },
  "zh": {
   "question": "用 describe 查看汇总统计。对 df 的 value=[1,2,3,4]，输出 df['value'].describe() 中的 count 值。",
   "example": "试着运行：df = pd.DataFrame({'value':[1,2,3,4]}); desc = df['value'].describe(); print(desc['count'])",
   "hint": "count 是观测值个数，即 4。"
  }
 },
 "pandas__QPAN015": {
  "en": {
   "question": "Reorder columns. When df's columns are ['A','B','C'], rearrange them as ['C','A','B'] and print df.columns.",
   "example": "Try running: df = pd.DataFrame([[1,2,3],[4,5,6]], columns=['A','B','C']); df = df[['C','A','B']]; print(df.columns)",
   "hint": "It becomes Index(['C','A','B'], dtype='object')."
  },
  "zh": {
   "question": "调整列顺序。当 df 的列为 ['A','B','C'] 时，按 ['C','A','B'] 重新排列后输出 df.columns。",
   "example": "试着运行：df = pd.DataFrame([[1,2,3],[4,5,6]], columns=['A','B','C']); df = df[['C','A','B']]; print(df.columns)",
   "hint": "结果为 Index(['C','A','B'], dtype='object')。"
  }
 },
 "pandas__QPAN016": {
  "en": {
   "question": "Stack two DataFrames vertically. df1 and df2 each have one column value with [1,2] and [3,4]. After concat, print the number of rows.",
   "example": "Try running: df1 = pd.DataFrame({'value':[1,2]}); df2 = pd.DataFrame({'value':[3,4]}); df = pd.concat([df1,df2]); print(len(df))",
   "hint": "2 + 2 rows makes 4 rows."
  },
  "zh": {
   "question": "将两个 DataFrame 纵向拼接。df1 和 df2 都只有 value 一列，值分别为 [1,2] 和 [3,4]，concat 后输出行数。",
   "example": "试着运行：df1 = pd.DataFrame({'value':[1,2]}); df2 = pd.DataFrame({'value':[3,4]}); df = pd.concat([df1,df2]); print(len(df))",
   "hint": "2 行 + 2 行，共 4 行。"
  }
 },
 "pandas__QPAN017": {
  "en": {
   "question": "Practice dropping a column. When df's columns are ['A','B'], drop B and print df.columns.",
   "example": "Try running: df = pd.DataFrame([[1,2],[3,4]], columns=['A','B']); df = df.drop(columns=['B']); print(df.columns)",
   "hint": "Only one column remains: Index(['A'], dtype='object')."
  },
  "zh": {
   "question": "练习删除列。当 df 的列为 ['A','B'] 时，删除 B 后输出 df.columns。",
   "example": "试着运行：df = pd.DataFrame([[1,2],[3,4]], columns=['A','B']); df = df.drop(columns=['B']); print(df.columns)",
   "hint": "只剩一列：Index(['A'], dtype='object')。"
  }
 },
 "pandas__QPAN018": {
  "en": {
   "question": "Practice replacing values. In df's grade=['A','B','A'], change 'A' to 1 and 'B' to 2, then print the sum of grade.",
   "example": "Try running: df = pd.DataFrame({'grade':['A','B','A']}); df['grade'] = df['grade'].map({'A':1,'B':2}); print(df['grade'].sum())",
   "hint": "It is the result of 1+2+1."
  },
  "zh": {
   "question": "练习值替换。将 df 中 grade=['A','B','A'] 的 'A' 换成 1、'B' 换成 2，然后输出 grade 的总和。",
   "example": "试着运行：df = pd.DataFrame({'grade':['A','B','A']}); df['grade'] = df['grade'].map({'A':1,'B':2}); print(df['grade'].sum())",
   "hint": "结果是 1+2+1。"
  }
 },
 "pandas__QPAN019": {
  "en": {
   "question": "Reset the index after sorting. Sort df's value=[30,10,20] in ascending order, apply reset_index(drop=True), and print the first value.",
   "example": "Try running: df = pd.DataFrame({'value':[30,10,20]}); df = df.sort_values('value'); df = df.reset_index(drop=True); print(df['value'].iloc[0])",
   "hint": "After sorting, the smallest value comes first."
  },
  "zh": {
   "question": "排序后重置索引。将 df 的 value=[30,10,20] 升序排序，执行 reset_index(drop=True) 后输出第一个 value。",
   "example": "试着运行：df = pd.DataFrame({'value':[30,10,20]}); df = df.sort_values('value'); df = df.reset_index(drop=True); print(df['value'].iloc[0])",
   "hint": "排序后最小的值位于第一行。"
  }
 },
 "pandas__QPAN020": {
  "en": {
   "question": "Change types with astype. Convert df's price=['100','200'] strings to integers and print the sum of price.",
   "example": "Try running: df = pd.DataFrame({'price':['100','200']}); df['price'] = df['price'].astype(int); print(df['price'].sum())",
   "hint": "After converting to integers, compute 100+200."
  },
  "zh": {
   "question": "用 astype 转换类型。将 df 中 price=['100','200'] 的字符串转为整数后输出 price 的总和。",
   "example": "试着运行：df = pd.DataFrame({'price':['100','200']}); df['price'] = df['price'].astype(int); print(df['price'].sum())",
   "hint": "转换为整数后计算 100+200。"
  }
 },
 "strings__QSTR001": {
  "en": {
   "question": "Convert to uppercase. Change s='python' with upper() and print it.",
   "hint": "string.upper() turns every letter into uppercase."
  },
  "zh": {
   "question": "转换为大写。用 upper() 转换 s='python' 并输出。",
   "hint": "字符串.upper() 把所有字母转为大写。"
  }
 },
 "strings__QSTR002": {
  "en": {
   "question": "Convert to lowercase. Change s='HELLO World' with lower() and print it.",
   "hint": "string.lower() turns every letter into lowercase."
  },
  "zh": {
   "question": "转换为小写。用 lower() 转换 s='HELLO World' 并输出。",
   "hint": "字符串.lower() 把所有字母转为小写。"
  }
 },
 "strings__QSTR003": {
  "en": {
   "question": "Remove leading and trailing spaces. Remove the spaces from s='   AI   ' with strip(), then wrap it with '[' and ']' and print it. Result: [AI]",
   "hint": "strip() removes spaces at both ends."
  },
  "zh": {
   "question": "去除首尾空格。用 strip() 去掉 s='   AI   ' 的空格，再用 '[' 和 ']' 包起来输出。结果：[AI]",
   "hint": "strip() 会去除两端的空格。"
  }
 },
 "strings__QSTR004": {
  "en": {
   "question": "Replace text. In s='I like Java', replace 'Java' with 'Python' and print it.",
   "hint": "Use replace(old, new)."
  },
  "zh": {
   "question": "替换字符串。把 s='I like Java' 中的 'Java' 换成 'Python' 并输出。",
   "hint": "使用 replace(要查找的值, 要替换的值)。"
  }
 },
 "strings__QSTR005": {
  "en": {
   "question": "Split a string. Split s='apple,banana,cherry' by commas and print the resulting list.",
   "hint": "split(',') cuts at commas and makes a list."
  },
  "zh": {
   "question": "分割字符串。用逗号分割 s='apple,banana,cherry'，输出得到的列表。",
   "hint": "split(',') 以逗号为界切分并生成列表。"
  }
 },
 "strings__QSTR006": {
  "en": {
   "question": "Join a list into a string. Join words=['AI','Business','Management'] with spaces and print it.",
   "hint": "Use the form 'separator'.join(list)."
  },
  "zh": {
   "question": "把列表合并成字符串。用空格连接 words=['AI','Business','Management'] 并输出。",
   "hint": "使用 '分隔符'.join(列表) 的形式。"
  }
 },
 "strings__QSTR007": {
  "en": {
   "question": "Count a specific character. Use count() to print how many times 'a' appears in s='banana'.",
   "hint": "string.count('a') returns the number of times 'a' appears."
  },
  "zh": {
   "question": "统计特定字符的个数。用 count() 输出 s='banana' 中 'a' 出现的次数。",
   "hint": "字符串.count('a') 返回 'a' 出现的次数。"
  }
 },
 "strings__QSTR008": {
  "en": {
   "question": "Check containment. Use the in operator to check whether 'Py' is in 'Python' and print the result.",
   "hint": "'part' in 'whole' returns True/False."
  },
  "zh": {
   "question": "检查是否包含。用 in 运算符检查 'Py' 是否在 'Python' 中并输出结果。",
   "hint": "'部分' in '整体' 返回 True/False。"
  }
 },
 "strings__QSTR009": {
  "en": {
   "question": "Find a position. In s='data science', print the index where 'science' starts using find().",
   "hint": "find() returns the first position found (from 0), or -1 if not found."
  },
  "zh": {
   "question": "查找位置。用 find() 输出 s='data science' 中 'science' 开始的索引。",
   "hint": "find() 返回第一次出现的位置（从 0 开始），找不到则返回 -1。"
  }
 },
 "strings__QSTR010": {
  "en": {
   "question": "What if the text is not found? Print the result of find('java') on s='python'.",
   "hint": "find() returns -1 when it cannot find the text."
  },
  "zh": {
   "question": "找不到会怎样？输出 s='python' 中 find('java') 的结果。",
   "hint": "find() 找不到时返回 -1。"
  }
 },
 "strings__QSTR011": {
  "en": {
   "question": "Check the start/end. Use endswith() to check whether filename='report.csv' ends with '.csv' and print the result.",
   "hint": "endswith('.csv') is True when the ending matches."
  },
  "zh": {
   "question": "检查开头/结尾。用 endswith() 检查 filename='report.csv' 是否以 '.csv' 结尾并输出结果。",
   "hint": "endswith('.csv') 在结尾匹配时为 True。"
  }
 },
 "strings__QSTR012": {
  "en": {
   "question": "Capitalize first letters. Apply title() to s='hello world' and print it.",
   "hint": "title() makes the first letter of each word uppercase."
  },
  "zh": {
   "question": "首字母大写。对 s='hello world' 使用 title() 并输出。",
   "hint": "title() 会把每个单词的首字母变成大写。"
  }
 },
 "strings__QSTR013": {
  "en": {
   "question": "Check whether a string is all digits. Apply isdigit() to s='2026' and t='20a6' and print with print(s.isdigit(), t.isdigit()).",
   "hint": "isdigit() is True only when every character is a digit."
  },
  "zh": {
   "question": "检查是否全由数字组成。对 s='2026' 和 t='20a6' 使用 isdigit()，用 print(s.isdigit(), t.isdigit()) 输出。",
   "hint": "isdigit() 只有在所有字符都是数字时才为 True。"
  }
 },
 "strings__QSTR014": {
  "en": {
   "question": "Reverse a string. Reverse s='python' with the slice [::-1] and print it.",
   "hint": "[::-1] reads from the end backwards, one step at a time."
  },
  "zh": {
   "question": "反转字符串。用切片 [::-1] 反转 s='python' 并输出。",
   "hint": "[::-1] 从末尾开始逐个倒着读取。"
  }
 },
 "strings__QSTR015": {
  "en": {
   "question": "Get the last characters. From s='2026-10-29', print only the last 2 characters using negative-index slicing.",
   "hint": "s[-2:] goes from the second-to-last character to the end."
  },
  "zh": {
   "question": "获取最后几个字符。从 s='2026-10-29' 中用负索引切片只输出最后 2 个字符。",
   "hint": "s[-2:] 表示从倒数第二个到末尾。"
  }
 },
 "strings__QSTR016": {
  "en": {
   "question": "Count words by spaces. Print the number of words in s='Python is fun and easy'.",
   "hint": "Make a list of words with split(), then use len()."
  },
  "zh": {
   "question": "按空格统计单词数。输出 s='Python is fun and easy' 的单词个数。",
   "hint": "先用 split() 生成单词列表，再用 len()。"
  }
 },
 "strings__QSTR017": {
  "en": {
   "question": "Strings cannot be changed (immutable). Make a new string by changing the first letter of s='cat' to 'b' using 'b' + s[1:], and print it.",
   "hint": "s[0]='b' causes an error, so make a new string with slicing."
  },
  "zh": {
   "question": "字符串不可修改（immutable）。用 'b' + s[1:] 生成把 s='cat' 首字母换成 'b' 的新字符串并输出。",
   "hint": "s[0]='b' 会报错，所以要用切片生成新字符串。"
  }
 },
 "strings__QSTR018": {
  "en": {
   "question": "Check for a palindrome. Print the result of comparing whether s='level' reads the same forwards and backwards.",
   "hint": "If s == s[::-1], it is a palindrome."
  },
  "zh": {
   "question": "判断回文。输出比较 s='level' 正读和反读是否相同的结果。",
   "hint": "s == s[::-1] 时为回文。"
  }
 },
 "strings__QSTR019": {
  "en": {
   "question": "Chain methods. Process s='  Hello World  ' in the order strip() → lower() → replace(' ', '_') and print it.",
   "hint": "Methods can be chained with dots and applied in order."
  },
  "zh": {
   "question": "链式调用方法。把 s='  Hello World  ' 依次经过 strip() → lower() → replace(' ', '_') 处理后输出。",
   "hint": "方法可以用点（.）连接，依次执行。"
  }
 },
 "strings__QSTR020": {
  "en": {
   "question": "Extract the ID from an email. From email='student@wsu.ac.kr', take the part before '@' with split and print it.",
   "hint": "Element 0 of split('@') is the ID."
  },
  "zh": {
   "question": "从邮箱中提取用户名。从 email='student@wsu.ac.kr' 中用 split 取出 '@' 前面的部分并输出。",
   "hint": "split('@') 结果中的第 0 个元素就是用户名。"
  }
 }
};
