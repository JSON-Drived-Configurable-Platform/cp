<template>
  <div class="user-avatar-dropdown">
    <Dropdown>
      <Badge>
        <Avatar :src="userAvatar" />
        {{ userName }}
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown" />
      <DropdownMenu slot="list">
        <DropdownItem name="message">
          消息中心
          <Badge style="margin-left: 10px" />
        </DropdownItem>
        <DropdownItem name="logout">
          退出登录
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import "./user.less";
export default {
  name: "User",
  computed: {
    userAvatar() {
      return this.$store.state.user.userAvatar;
    },
    userName() {
      return this.$store.state.user.userName;
    },
    departmentName() {
      return this.$store.state.user.departmentName;
    }
  }
};
</script>
