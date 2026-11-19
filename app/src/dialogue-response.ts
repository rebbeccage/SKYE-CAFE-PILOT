/** Listening responses are presentation only; the final authored reply owns rewards. */
export function listeningResponse(text:string,name:string){
 if(/温度|一模一样/.test(text))return '原来，每天需要的温度都不同。';
 if(/父亲|温室/.test(text))return '愿意再讲讲这间温室吗？';
 if(/回家|评价/.test(text))return '这样的心意，我也感受到了。';
 if(/修.*船|出海/.test(text))return '那些船，后来去了哪里呢？';
 if(/妻子|蓝莓/.test(text))return '这份回忆，一定很珍贵。';
 if(/椅子|小叶子/.test(text))return '我愿意继续听听。';
 if(/泥土|浇水/.test(text))return '我会先摸摸泥土，慢慢来。';
 if(/薄荷|蜂蜜/.test(text))return '听起来，就像春天的味道。';
 if(/花开|院子/.test(text))return '这样的庭院，让人想留下。';
 if(/香气|咖啡香/.test(text))return '愿意再多坐一会儿吗？';
 return name==='林伯'?'不着急，我愿意继续倾听。':'嗯，我在听。';
}
