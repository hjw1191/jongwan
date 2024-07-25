const express = require('express'); 
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const methodOverride = require('method-override')
app.use(methodOverride('_method')) 

const { MongoClient } = require('mongodb'); 
const { ObjectId } = require('mongodb') 

let db;
const url = 'mongodb+srv://hjw1191:zxc123@hjw1191.zaqklsn.mongodb.net/?retryWrites=true&w=majority&appName=hjw1191';
new MongoClient(url).connect().then((client) => {
  console.log('DB연결성공');
  db = client.db('forum');
  app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중');
  });
}).catch((err) => {
  console.log(err);
});

app.get('/', (요청, 응답) => { 
  응답.sendFile(__dirname + '/index.html'); 
});

app.get('/list', async (요청, 응답) => { 
  let result = await db.collection('post').find().toArray(); 
  응답.render('list.ejs', { 글목록: result }); 
});

app.get('/write', (요청, 응답) => { 
  응답.render('write.ejs'); 
});

app.post('/add', async (요청, 응답) => { 
  try {
    if (요청.body.title.trim() === '') { 
      응답.send('제목을 입력하지 않았습니다.');
    } else {
      await db.collection('post').insertOne({ title: 요청.body.title, content: 요청.body.content });
      응답.redirect('/list'); 
    }
  } catch (e) {
    console.log(e);
    응답.status(500).send('DB 에러 발생');
  }
});


app.get('/detail/:id', async (요청, 응답) => {
  let result = await db.collection('post').findOne({ _id : new ObjectId(요청.params.id) })
  응답.render('detail.ejs', { result : result })
})

app.get('/edit/:id', async (요청, 응답) => {
  let result = await db.collection('post').findOne({ _id : new ObjectId(요청.params.id) })
  응답.render('edit.ejs', {result : result})
})

app.put('/edit', async (요청, 응답)=>{
  await db.collection('post').updateOne({ _id : new ObjectId(요청.body.id) },
    {$set : { title : 요청.body.title, content : 요청.body.content }
  })
  console.log(요청.body)
  응답.redirect('/list')
}) 

app.delete('/delete', async (요청, 응답) => {
  let result = await db.collection('post').deleteOne( { _id : new ObjectId(요청.query.docid) } )
  응답.send('삭제완료')
})