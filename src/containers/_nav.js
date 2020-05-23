export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: '我的云账户',
        to: '/my',
        icon: 'cil-speedometer'
      },      
      {
        _name: 'CSidebarNavItem',
        name: '指派云管理员',
        to: '/admin',
        icon: 'cil-speedometer'
      },
      {
        _name: 'CSidebarNavItem',
        name: '云账户设置',
        to: '/account',
        icon: 'cil-speedometer'
      },
      {
        _name: 'CSidebarNavItem',
        name: '邮箱设置',
        to: '/email',
        icon: 'cil-speedometer'
      }
    ]
  }
]