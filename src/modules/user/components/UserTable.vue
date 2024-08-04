<script lang="ts">
import { defineComponent, h, type PropType } from 'vue'
import type { GetUserDtoResult } from '@/modules/user/dtos/GetUsersDto'
import type { IUser } from '@/modules/user/interfaces'

interface ICell {
  key: string,
  value?: string | number,
}
type HeaderKeys = 'firstName' | 'lastName' | 'phone'
type PartialUser = Pick<IUser, HeaderKeys>;

const TABLE_HEADERS: Record<keyof PartialUser, string> = {
  firstName: 'Имя',
  lastName: 'Фамилия',
  phone: 'Телефон',
}

export default defineComponent({
  name: 'UserTable',
  props: {
    users: {
      type: Array as PropType<PartialUser[]>,
      default: () => ([]),
    }
  },
  computed: {
    headers () {
      const item = this.users[0];
      const headers = [];

      if (item) {
        for (const key in item) {
          headers.push(TABLE_HEADERS[key as HeaderKeys])
        }
      }

      return headers
    }
  },
  emits: {
    onClick: (payload: ICell) => true,
  },
  methods: {
    h,
    onCellClick (cell: ICell) {
      this.$emit('onClick', cell)
    },
  },
})
</script>

<template>
  <table>
    <thead>
    <th v-for="header in headers" :key="header">{{header}}</th>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in users" :key="rowIndex">
        <td v-for="(cell, cellKey) in row" :key="cellKey" @click="onCellClick({key: cellKey, value: cell})">{{cell}}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 70%;
  border-collapse: collapse;
  border: thin solid rgba(0, 0, 0, 0.12);
  margin: auto;
  caption-side: top;
  empty-cells: hide;
  table-layout: auto;
}
th,
td {
  padding: 15px;
  text-align: left;
}
td {
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tr {
  cursor: pointer;
  transition: all ease 0.1s;
  &:hover {
    background-color: #afafaf;
  }
}
</style>
