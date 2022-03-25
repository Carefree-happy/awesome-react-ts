type A = ['12', "23", "true"] as const;
type B = ['12', "12", "true"];
const tupleA = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const tupleB = ['tesla', 'model 3', 'model X', 'model Y']

// 鼠标悬浮触发的是显示类型，as const将字符串转化为字面量类型