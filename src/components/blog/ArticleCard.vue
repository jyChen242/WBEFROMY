<template>
  <el-card class="article-card" :body-style="{ padding: '0px' }">
    <img v-if="cover" :src="cover" class="cover-image">
    <div class="article-content">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
      <div class="meta">
        <span class="time">
          <el-icon><Calendar /></el-icon>
          {{ formatDate(createTime) }}
        </span>
        <span class="category">
          <el-icon><Folder /></el-icon>
          {{ category }}
        </span>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { Calendar, Folder } from '@element-plus/icons-vue'

interface Props {
  title: string
  description: string
  cover?: string
  createTime: string
  category: string
}

defineProps<Props>()

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}
</script>

<style scoped lang="scss">
.article-card {
  margin-bottom: 20px;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .cover-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .article-content {
    padding: 16px;
    
    .title {
      margin: 0 0 10px;
      font-size: 18px;
    }
    
    .description {
      color: #666;
      margin-bottom: 16px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    
    .meta {
      display: flex;
      gap: 16px;
      color: #999;
      font-size: 14px;
      
      span {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
  }
}
</style> 