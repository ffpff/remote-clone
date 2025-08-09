# RemoteOK 设计系统规格

## 项目概述

RemoteOK 克隆网站的完整设计系统，基于现代设计令牌架构，确保一致性、可维护性和可扩展性。

## 技术栈

- **框架**: Next.js 15 + React 18
- **样式**: Tailwind CSS 3.4 + CSS Custom Properties
- **组件**: Radix UI + shadcn/ui
- **变体管理**: Class Variance Authority (CVA)
- **动画**: Tailwind CSS Animate

## 设计系统基础

### 🎨 颜色调色板

#### 品牌色彩
```css
/* RemoteOK 主品牌色 */
--remoteok-red: 1 79% 61%;        /* #f14845 */
--remoteok-teal: 172 53% 56%;     /* #58c8ba */

/* 品牌色变体 */
--remoteok-red-50: 1 79% 95%;     /* 极浅红色 */
--remoteok-red-100: 1 79% 85%;    /* 浅红色 */
--remoteok-red-600: 1 79% 55%;    /* 深红色 */
--remoteok-red-700: 1 79% 45%;    /* 极深红色 */

--remoteok-teal-50: 172 53% 95%;  /* 极浅青绿色 */
--remoteok-teal-100: 172 53% 85%; /* 浅青绿色 */
--remoteok-teal-600: 172 53% 50%; /* 深青绿色 */
--remoteok-teal-700: 172 53% 40%; /* 极深青绿色 */
```

#### 语义颜色
- **Primary**: 深灰蓝色 - 用于主要操作
- **Secondary**: 浅灰色 - 用于次要内容
- **Muted**: 极浅灰 - 用于背景和分隔
- **Accent**: 强调色 - 用于交互状态

### 📝 排版比例

#### 字体族
- **主字体**: 'Nunito' - 现代无衬线字体，易读性强
- **品牌字体**: 'Pacifico' - 用于 Logo 和特殊标题

#### 字号标准
```css
--font-size-2xs: 0.625rem;  /* 10px */
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */
--font-size-5xl: 3rem;      /* 48px */
```

### 📏 间距系统

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### 📐 断点系统

```typescript
screens: {
  sm: '640px',   // 手机横屏 / 小平板
  md: '768px',   // 平板竖屏
  lg: '1024px',  // 平板横屏 / 小笔记本
  xl: '1280px',  // 桌面显示器
  '2xl': '1400px' // 大屏显示器
}
```

## 组件架构

### Button 组件

**目的**: 统一的交互按钮组件，支持多种变体和尺寸

**变体列表**:
- `default`: 标准主按钮
- `brand-red`: RemoteOK 红色品牌按钮
- `brand-teal`: RemoteOK 青绿色品牌按钮  
- `brand-outline`: 品牌色边框按钮
- `outline`: 标准边框按钮
- `ghost`: 透明背景按钮
- `secondary`: 次要按钮

**属性接口**:
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "brand-red" | "brand-teal" | "brand-outline" | "outline" | "ghost" | "secondary" | "link"
  size?: "default" | "sm" | "lg" | "xl" | "icon"
  asChild?: boolean
}
```

**视觉规格**:
- ✅ 圆角: 6px (md)
- ✅ 阴影: 品牌按钮使用 shadow-md，悬停时 shadow-lg
- ✅ 过渡: 200ms 缓动动画
- ✅ 悬停效果: 轻微缩放 (1.02) + 颜色变化
- ✅ 焦点状态: ring-1 ring-ring

**使用示例**:
```jsx
// 品牌主按钮
<Button variant="brand-red" size="lg">
  Post a remote job →
</Button>

// 品牌边框按钮
<Button variant="brand-outline">
  Learn more
</Button>
```

### Badge 组件

**目的**: 标签和状态指示器

**变体列表**:
- `default`: 标准标签
- `brand-red`: 红色品牌标签
- `brand-teal`: 青绿色品牌标签
- `success`: 成功状态 (绿色)
- `warning`: 警告状态 (黄色)
- `outline`: 边框标签

**属性接口**:
```typescript
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "brand-red" | "brand-teal" | "brand-outline" | "success" | "warning" | "outline"
}
```

**使用示例**:
```jsx
<Badge variant="success">VERIFIED</Badge>
<Badge variant="outline">JavaScript</Badge>
```

### 作业卡片 (JobCard)

**目的**: 展示职位信息的卡片组件

**变体类型**:
- `featured`: 突出显示的职位 (红色背景)
- `highlighted`: 高亮职位 (黄色背景) 
- `standard`: 标准职位 (白色背景)

**视觉规格**:
- ✅ 圆角: 8px (lg)
- ✅ 内边距: 24px (p-6)
- ✅ 悬停效果: 向上移动 2px + 阴影变化
- ✅ 过渡: 200ms cubic-bezier 缓动
- ✅ 响应式布局: 移动端垂直排列，桌面端水平排列

**组件结构**:
```jsx
<div className="job-card">
  <div className="company-logo" />
  <div className="job-info">
    <h3 className="job-title" />
    <p className="company-name" />
    <div className="job-meta">
      <span className="location" />
      <span className="salary" />
    </div>
    <div className="tags">
      <Badge />
    </div>
  </div>
  <div className="job-time" />
</div>
```

## 布局模式

### 容器系统

**响应式容器内边距**:
```css
--container-padding: 1rem;     /* 默认 16px */
--container-padding-sm: 1.5rem; /* sm: 24px */
--container-padding-md: 2rem;   /* md: 32px */
--container-padding-lg: 3rem;   /* lg: 48px */
--container-padding-xl: 4rem;   /* xl: 64px */
--container-padding-2xl: 5rem;  /* 2xl: 80px */
```

### 网格系统

**主要布局模式**:
- **导航栏**: `flex justify-between items-center`
- **筛选器**: `flex gap-3 md:gap-6 overflow-x-auto`
- **作业列表**: `space-y-4` 垂直间距
- **作业卡片内部**: `flex flex-col md:flex-row` 响应式方向

## 交互模式

### 悬停效果

**按钮悬停**:
```css
transform: scale(1.02);
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
```

**卡片悬停**:
```css
transform: translateY(-2px);
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
```

### 动画效果

**预定义动画**:
- `fade-in`: 淡入效果 (0.5s)
- `slide-up`: 从下方滑入 (0.3s)
- `job-hover`: 卡片悬停效果 (0.2s)

## 可访问性要求

### 颜色对比度
- ✅ 所有文字与背景对比度 ≥ 4.5:1
- ✅ 重要信息对比度 ≥ 7:1
- ✅ 品牌色与白色对比度测试通过

### 键盘导航
- ✅ 所有交互元素支持 Tab 导航
- ✅ 焦点指示器清晰可见
- ✅ 逻辑的 Tab 顺序

### 屏幕阅读器
- ✅ 语义化 HTML 结构
- ✅ 合适的 ARIA 标签
- ✅ 图像 alt 属性

## 实施路线图

### 已完成 ✅
1. ✅ 设计令牌系统建立
2. ✅ RemoteOK 品牌色集成
3. ✅ 基础组件重构 (Button, Badge)
4. ✅ 主页面组件更新
5. ✅ 响应式设计统一
6. ✅ 动画和过渡效果

### 后续优化建议 📋
1. 🔄 添加更多组件变体 (Input, Card, Modal)
2. 🔄 实现深色模式切换功能  
3. 🔄 添加微动画和过渡效果
4. 🔄 性能优化 (代码分割、图像优化)
5. 🔄 可访问性测试和改进
6. 🔄 组件单元测试

## 使用指南

### 设计令牌使用

**✅ 推荐做法**:
```jsx
// 使用设计令牌
<div className="bg-remoteok-red text-remoteok-red-foreground">
<div className="container py-6">
<Button variant="brand-red" size="lg">
```

**❌ 避免的做法**:
```jsx
// 硬编码样式
<div className="bg-red-500 px-4 lg:px-6">
<div style={{ color: '#f14845' }}>
```

### 响应式设计

**断点使用原则**:
- **sm**: 针对手机横屏优化
- **md**: 针对平板设备优化  
- **lg**: 针对笔记本电脑优化
- **xl**: 针对桌面显示器优化
- **2xl**: 针对大屏显示器优化

### 组件组合

**推荐的组件组合模式**:
```jsx
<div className="container">
  <div className="space-y-4">
    <JobCard variant="featured">
    <JobCard variant="standard">
  </div>
</div>
```

---

## 维护说明

这个设计系统是一个活的文档，应该随着项目发展不断更新。所有设计变更都应该先在设计系统中定义，然后在组件中实施，以确保一致性。

**文档版本**: 1.0  
**最后更新**: 2025-01-09  
**负责人**: Claude Code Assistant