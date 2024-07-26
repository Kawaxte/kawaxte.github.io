import { $ } from "../utils/dom.ts";

export function initContactForm(): void {
	const form = $("#contactForm") as HTMLFormElement;
	const formSuccess = $("#formSuccess") as HTMLDivElement;
	const formFailure = $("#formFailure") as HTMLDivElement;
	const submitButton = form.querySelector(
		"button[type='submit']",
	) as HTMLButtonElement;

	if (form) {
		form.addEventListener("submit", handleSubmit);
	}

	async function handleSubmit(event: Event): Promise<void> {
		event.preventDefault();
		setSubmitButtonState(true);

		try {
			const response = await submitForm();
			handleFormResponse(response);
		} catch (error) {
			console.error("Error:", error);
			showFormFailure();
		} finally {
			setSubmitButtonState(false);
		}
	}

	function setSubmitButtonState(isSubmitting: boolean): void {
		if (submitButton) {
			submitButton.disabled = isSubmitting;
			submitButton.innerHTML = isSubmitting
				? '<i class="fas fa-spinner fa-spin"></i> Sending...'
				: "Send";
		}
	}

	function submitForm(): Promise<Response> {
		const formData = new FormData(form);
		const jsonData = Object.fromEntries(formData.entries());

		return fetch(
			"https://formsubmit.co/ajax/25cfe7bb970482f72806da9e7e1110ab",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json",
				},
				body: JSON.stringify(jsonData),
			},
		);
	}

	function handleFormResponse(response: Response): void {
		if (response.ok) {
			showFormSuccess();
		} else {
			throw new Error("Form submission failed");
		}
	}

	function showFormSuccess(): void {
		form.style.display = "none";
		formSuccess.style.display = "block";
	}

	function showFormFailure(): void {
		form.style.display = "none";
		formFailure.style.display = "block";
	}
}
