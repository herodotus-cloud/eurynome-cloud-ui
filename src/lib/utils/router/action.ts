import type { SweetAlertResult, SweetAlertIcon } from 'sweetalert2';
import { useAuthenticationStore } from '/@/stores';
import { RouteUtils } from './route';
import { Swal } from '../base';

class ActionUtilities {
	private static instance = new ActionUtilities();

	private constructor() {}

	public static getInstance(): ActionUtilities {
		return this.instance;
	}

	public signOut(): void {
		const authentication = useAuthenticationStore();
		authentication.signOut().then(() => {
			authentication.$reset();
			RouteUtils.toSignIn();
		});
	}

	public signOutWithDialog(): void {
		Swal.fire({
			title: '要走了么?',
			text: '您确定要退出系统！',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: '是的',
			cancelButtonText: '取消',
		}).then((result: SweetAlertResult) => {
			if (result.value) {
				this.signOut();
				localStorage.clear();
			}
		});
	}

	public tokenExpires(title: string, text: string, icon: SweetAlertIcon): void {
		Swal.fire({
			title: title,
			text: text,
			icon: icon,
			showClass: {
				popup: 'animate__animated animate__fadeInDown',
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUp',
			},
			confirmButtonText: '已阅!',
			willClose: () => {
				this.signOut();
			},
		});
	}
}

export const ActionUtils: ActionUtilities = ActionUtilities.getInstance();
