export enum PathEnum {
	ROOT = '/',
	// 登录
	SIGN_IN = '/sign-in',
	// 首页
	HOME = '/dashboard',
	HOME_NAME = 'Dashboard',
	HOME_TITLE = '首页',
	// 错误
	NOT_FOUND = '/:path(.*)*',
	NOT_FOUND_NAME = 'PageNotFound',
}

export enum OperationEnum {
	CREATE = 'create',
	EDIT = 'edit',
	AUTHORIZE = 'authorize',
	ALLOCATABLE = 'allocatable',
}

export enum ComponentNameEnum {
	SYS_USER = 'SysUser',
	SYS_ROLE = 'SysRole',
	SYS_AUTHORITY = 'SysAuthority',
	SYS_ELEMENT = 'SysElement',
	SYS_DEFAULT_ROLE = 'SysDefaultRole',
	SYS_SECURITY_ATTRIBUTE = 'SysSecurityAttribute',
	SYS_ORGANIZATION = 'SysOrganization',
	SYS_DEPARTMENT = 'SysDepartment',
	SYS_EMPLOYEE = 'SysEmployee',
	SYS_OWNERSHIP = 'SysOwnership',
	OAUTH2_APPLICATION = 'OAuth2Application',
	OAUTH2_SCOPE = 'OAuth2Scope',
	OAUTH2_TOKEN = 'OAuth2Token',
	OAUTH2_COMPLIANCE = 'OAuth2Compliance',
	ASSET_SERVER = 'AssetServer',
	ASSET_APPLICATION = 'AssetApplication',
	DATABASE_ACCOUNT = 'DatabaseAccount',
	DATABASE_CATALOG = 'DatabaseCatalog',
	DATABASE_INSTANCE = 'DatabaseInstance',
}
