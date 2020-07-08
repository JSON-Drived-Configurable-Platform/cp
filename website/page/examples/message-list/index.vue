<template>
    <div class="fg-message-list">
        <List
            item-layout="vertical"
        >
            <ListItem v-for="item in data.list" :key="item.title">
                <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
                {{ item.content }}
            </ListItem>
        </List>
        <Page
            class="fg-message-list-page"
            v-if="showPage"
            :show-total="showPageTotal"
            :current="data.page"
            :total="data.total"
            :page-size="data.pageSize"
        />
    </div>
</template>

<script>

export default {
    data() {
        return {
            showPage: true,
            showPageTotal: true,
            data: {
                total: 5,
                page: 1,
                pageSize: 5,
                list: [
                    {
                        title: 'This is title 1',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    },
                    {
                        title: 'This is title 2',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    },
                    {
                        title: 'This is title 3',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    },
                    {
                        title: 'This is title 4',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    },
                    {
                        title: 'This is title 5',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    }
                ]
            }
        };
    }
};
</script>

<style lang="less">
</style>
