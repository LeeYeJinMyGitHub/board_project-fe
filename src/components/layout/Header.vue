<template>
    <div>
        <h2>게시판 리스트</h2>
    <div>
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>내용</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id" >
                <td>
                    {{ post.id }}
                </td>
                <td>{{ post.title }}</td>
                <td>{{ post.contents }}</td>
                </tr>
            </tbody>
        </table> 
      </div>

        <div v-if="posts.length > 0">
            <ul>
                <li v-for="post in posts" :key="post.id">
                    <p>{{ post.id }}
                    </p>
                    <p>{{ post.title }}</p>
                    <p>{{ post.contents }}</p>
                </li>
            </ul>
            {{ posts }}
        </div>
        <div v-else>
            <p>데이터가 없습니다.</p>
        </div>
</div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Header",
        data() {
            return {posts: []}
        },
        created() {
          this.getBoardList();
        },
        mounted() {
            var vm = this;
            axios
                .get('http://localhost:8080/list/get-board-list.do')
                .then(function (response) {
                    console.log(response.data);
                    vm.posts = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        methods: {
          rowClick(row, column, event)
          {
            console.log(row);
            console.log(column);
            console.log(event);
          }
        } 
    }
</script>

<style scoped="scoped">
table, th, td {
    border: 1px #bcbcbc groove;
    border-collapse : collapse;
  }
  table {
    width: 100%;
    height: 200px;
  }
</style>